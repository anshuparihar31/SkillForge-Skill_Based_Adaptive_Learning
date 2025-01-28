const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true }
});

const ContactUs = mongoose.model('ContactUs', contactSchema);  // Ensure the model name is consistent with your import

module.exports = ContactUs;
