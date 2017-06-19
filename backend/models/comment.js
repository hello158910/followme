var mongoose = require('mongoose');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds127892.mlab.com:27892/comment-test');
var Schema = mongoose.Schema;
// Define model schema
var schema = new Schema({
  // References User model
  name:String,
  content: String,
  created: Date
});

// Export Mongoose model
export default mongoose.model('Comment', schema);