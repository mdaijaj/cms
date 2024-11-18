const postController = require("../controller/post_controller");
const { uploadImage } = require("../middleware/index")

module.exports = function (app) {

  app.post('/api/uploadImage', uploadImage.single("file"), postController.imageUpload);
  app.post('/api/createPost', postController.createPost);
  app.get('/api/getAllPosts', postController.getAllPosts);
  app.get('/api/getPostDetails/:id', postController.getPostDetails);
  app.put('/api/updatepost/:id', postController.updatePOst);
  app.delete('/api/deletePost/:id', postController.deletePost);

}