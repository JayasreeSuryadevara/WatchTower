const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  stock: {
    type: Schema.Types.ObjectId,
    ref: 'Stock'
  },
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  dividend: {
    type: Number,
    required: true
  },
  yield: {
    type: Number,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  }
});

CompanySchema.statics.addCompany = async function( stock, name, desc, dividend, yield, industry, sector) {
  const Company = this;
  const company = await Company.create({ stockId: stock._id, name: name, desc: desc, dividend: dividend, yield: yield, industry: industry, sector: sector });
  if (company.save()) {
    company.success = true;
    company.message = "Succesfully created a Company"
    return company;
  } else {
    return null;
  }
}


module.exports = mongoose.model('Company', CompanySchema);