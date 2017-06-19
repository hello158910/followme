var express = require('express'),
    list   = require('../controllers/comments-list'),
    create = require('../controllers/comments-create'),
    router  = express.Router();


router.route('/comments')
  .get(list)
  .put(create)

module.exports = router;