var Comment = require('../models/comment');


module.export =function(req, res, next){
    var comment = new Comment(req.body);
    comment.save(function(err){
        if(err)throw err;
        Person.find({}, function(err, users) {
            if(err)throw err;
        name: name,
    content: content,
    created: new Date,
      res.json({
    // Get the comment and populate User model
    comment: await Comment.findById(comment._id)
      .exec()
  });
        });
    });
        
    // });


};