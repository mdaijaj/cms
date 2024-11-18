import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'
import PostForm from './post_form';
import PreviewModel from './preview_model'

const Routing = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_post" element={<PostForm />} />
        <Route path="/post_table" element={<PreviewModel/>} />
      </Routes>
    </>
  )
}

export default Routing;