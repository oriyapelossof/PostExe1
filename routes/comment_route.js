const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comment_controller");

router.post("/",commentsController.createComment);
router.delete("/:id", (req, res) => {
    commentsController.deleteComment(req, res);
});

module.exports = router;