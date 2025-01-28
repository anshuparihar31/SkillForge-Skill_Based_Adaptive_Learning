const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String },
  skills: [String],
  interestedSkills: [String]
});

module.exports = mongoose.model('Profile', profileSchema);
