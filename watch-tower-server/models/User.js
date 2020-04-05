const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretOrKey = require("../config/keys").secretOrKey;
// const WatchListItem = mongoose.model('WatchListItem');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 32
    },
    name: {
        type: String,
        required: true
    },
    watchList: [{
        type: Schema.Types.ObjectId,
        ref: 'WatchListItem'
    }]
});

UserSchema.statics.login = async function (email, password) {
    const User = this;
    const user = await User.findOne({ email });
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
        user.token = "Bearer " + jwt.sign({ _id: user._id }, secretOrKey);
        user.loggedIn = true;
        return user;
    }
    return null;
};

UserSchema.statics.signup = async function (email, name, password) {
    const User = this;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, name, password: hashedPassword });
    if (user.save()) {
        user.token = "Bearer " + jwt.sign({ _id: user._id }, secretOrKey);
        user.loggedIn = true;
        return user;
    }
    return null;
};

UserSchema.methods.changePassword = async function (oldPassword, newPassword) {
    const user = this; //current user
    if (await bcrypt.compare(oldPassword, user.password)) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.save();
        return user;
    }
    return null;
}

module.exports = mongoose.model('User', UserSchema);
