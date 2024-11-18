// routes/posts.js
const db = require('../models/index');
const PostModel = db.postModel;


exports.imageUpload= async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
  return res.json({ url: imageUrl });
}


exports.createPost = async (req, res) => {
  try {
    if(!req.body){
      return res.status(400).json({
        message: 'It should not Empty!',
      });
    }
    
    const post = await PostModel.create(req.body);
    return res.status(200).json({
      message: 'Post created successfully!',
      data: post,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}


exports.getAllPosts = async (req, res) => {
  try{
    const post = await PostModel.findAll();
    return res.status(200).json({
      message: 'Get All Post Fetching successfully!',
      data: post,
    });
  }catch (error) {
    return res.status(400).json({ error: error.message });
  }
}


exports.getPostDetails = async (req, res) => {
  try{
    const post = await PostModel.findByPk(req.params.id);
    return res.status(200).json({
      message: 'Get Post Details successfully!',
      data: post,
    });
  }catch (error) {
    return res.status(400).json({ error: error.message });
  }
}


exports.updatePOst = async (req, res) => {
  try{
    const post = await PostModel.findByPk(req.params.id);
    await post.update(req.body);
    return res.status(200).json({
      message: 'Update Post Details successfully!',
    });
  }
  catch (error) {
    return res.status(400).json({ error: error.message });
  }
}


exports.deletePost = async (req, res) => {
  try{
    const post = await PostModel.findByPk(req.params.id);
    await post.destroy();
    return res.status(200).json({
      message: 'Deleted successfully!',
    });
  } 
  catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
