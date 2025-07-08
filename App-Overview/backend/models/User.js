const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // ...add other fields
});

// ✅ This line prevents the OverwriteModelError:
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
