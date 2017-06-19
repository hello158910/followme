
var Comment = require('../models/comment');
// User relation for .populate()


// List existing comments
export const list = async (req, res, next) => {
  // Get all comments and populate User models
  const comments = await Comment.find()
    .sort({ 'created': -1 })
    .exec();

  res.json({
    comments
  });
};

// Create new comment
