const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comment_controller");

router.post("/",commentsController.createComment);
router.delete("/:id", (req, res) => {
    commentsController.deleteComment(req, res);
});

router.get("/",commentsController.getAllComments);

router.put("/:id",commentsController.updateComment);


module.exports = router;