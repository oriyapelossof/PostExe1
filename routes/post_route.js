const express = require("express");
const router = express.Router();
const postsController = require("../controllers/post_controller");


router.post("/", (req, res) => {
    postsController.createPost(req, res);
  }); 

router.get("/:id", (req, res) => {
    postsController.getPostById(req, res);
});

router.get("/",postsController.getAllPosts);

router.get("/", postsController.getPostBySenderId);

router.put("/:id",postsController.updatePost);

module.exports = router;