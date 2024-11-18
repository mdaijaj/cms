import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
  Grid,
  CircularProgress,
  Modal,
  Box,
} from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ContentList = () => {
  const [contentItems, setContentItems] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [selectedItem, setSelectedItem] = useState(null); 
  const [openModal, setOpenModal] = useState(false); 

  const fetchContent = async () => {
    try {
      const response = await axios.get('/api/getAllPosts');
      setContentItems(response.data.data);
    } catch (error) {
      console.error('Error fetching content', error);
    } finally {
      setLoading(false); 
    }
  };

  const handleDelete = async (item) => {
    console.log("aiajkhan", item)
    try {
      await axios.delete(`/api/deletePost/${item.post_id}`);
      setContentItems(contentItems.filter((content) => content.id !== item.id)); // Remove deleted item from state
      toast.error('Content deleted Successfully', { autoClose: 1500 })     
      fetchContent()           
    } catch (error) {
      toast.warning('Content deleted Successfully', { autoClose: 1500 })                
    }
  };

  // Open modal for preview
  const handlePreview = (item) => {
    setSelectedItem(item); 
    setOpenModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setOpenModal(false); 
    setSelectedItem(null); 
  };

  useEffect(() => {
    fetchContent(); 
  }, []);


  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <CircularProgress /> 
      </div>
    );
  }


  if (contentItems.length === 0) {
    return (
      <Typography variant="h6" color="text.secondary" align="center" mt={3}>
        No content available to display.
      </Typography>
    );
  }


  return (
    <div className='container'>
      <Grid container spacing={3}>
        {contentItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              {item.image && (
               <CardMedia
               component="img"
               height="140"
               image={item.image || 'https://via.placeholder.com/140'}
               alt={item.title || 'Image'}
               sx={{ objectFit: 'cover' }} 
             />
                 
              )}
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    overflow: 'hidden',
                  }}
                >
                  {item.content || 'No description provided.'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handlePreview(item)}>
                  View Details
                </Button>
                <Button size="small" color="error" onClick={() => handleDelete(item)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>


      {/* Modal for Previewing Content */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ padding: '16px', maxWidth: '600px', margin: 'auto', marginTop: '10%', backgroundColor: 'white', borderRadius: '8px' }}>
          
          {selectedItem && (
            <div>
              <Typography variant="h6">{selectedItem.title}</Typography>
              <Typography variant="body1" mt={2}>{selectedItem.content}</Typography>
              {selectedItem.image && (
                <img src={selectedItem.image} alt={selectedItem.title} style={{ width: '100%', marginTop: '20px' }} />
              )}
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCloseModal}
                style={{ marginTop: '20px' }}
              >
                Close
              </Button>
            </div>
          )}
        </Box>
      </Modal>
      <ToastContainer/>
    </div>
  );
};

export default ContentList;
