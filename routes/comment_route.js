const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comment_controller");

router.post("/",commentsController.createComment);

module.exports = router;