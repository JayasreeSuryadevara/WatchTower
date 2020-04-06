const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Stock = mongoose.model('Stock');
// In case we need to map a stock to the company too

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Company', CompanySchema);