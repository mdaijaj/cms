import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['link', 'image', 'video'], 
      ['clean'],
    ],
    handlers: {
      image: () => document.getElementById('imageInput').click(),
      video: () => document.getElementById('videoInput').click(),
    },
  },
};


const PostForm = () => {
  const [title, setTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const navigate = useNavigate();


  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file); 
  
    try {
      const res = await axios.post('/api/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (res.status === 200) {
        const imageURL = res.data.url;
        const imageTag = `<img src="${imageURL}" alt="uploaded image" style="max-width:100%"/>`;
        setNewContent(imageTag);
        toast.success('Image uploaded successfully!', { autoClose: 3000 });
      } else {
        toast.error('Image upload failed. Please try again.', { autoClose: 3000 });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Image upload failed. Please try again.', { autoClose: 3000 });
    }
  };
  

  
  const handleVideoUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('/api/uploadVideo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 200) {
        const videoURL = res.data.url; 
        const videoTag = `<video controls style="max-width:100%"><source src="${videoURL}" type="video/mp4" /></video>`;
        setNewContent((prevContent) => prevContent + videoTag); 
        toast.success('Video uploaded successfully!', { autoClose: 3000 });
      } else {
        toast.error('Video upload failed. Please try again.', { autoClose: 3000 });
      }
    } catch (error) {
      console.error("Error uploading video:", error);
      toast.error('Video upload failed. Please try again.', { autoClose: 3000 });
    }
  };

  const handleFileInputChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'image') {
        handleImageUpload(file);
      } else if (type === 'video') {
        handleVideoUpload(file);
      }
    }
  };


  const handleSave = async (e) => {
    e.preventDefault();

    const extractSrc = (html) => {
      const match = html.match(/<img.*?src="(.*?)"/); 
      return match ? match[1] : html; 
    };
  
    let content = extractSrc(newContent);
    console.log("content", content)

    const finalPayload = { title, content };
    try {
      const res = await axios.post('/api/createPost', finalPayload);
      if (res.status === 200) {
        toast.success('Data submitted successfully!', { autoClose: 5000 });
        navigate('/post_table');
      } else {
        toast.warning('Submission failed', { autoClose: 5000 });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('This date is already booked. Please try another date.', { autoClose: 1500 });
    }
  };

  return (
    <>
      <div className='container'>
        <h2 style={{ textAlign: 'center' }}>Create Post</h2>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          value={newContent}
          label="newContent"
          onChange={setNewContent}
          style={{ height: '350px' }}
          modules={modules}
        />

        <input
          type="file"
          id="imageInput"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={(e) => handleFileInputChange(e, 'image')}
        />
        <input
          type="file"
          id="videoInput"
          style={{ display: 'none' }}
          accept="video/*"
          onChange={(e) => handleFileInputChange(e, 'video')}
        />
        <Button onClick={handleSave} variant="contained" color="success">
          Save
        </Button>
        <ToastContainer />
      </div>
    </>
  );
};

export default PostForm;
