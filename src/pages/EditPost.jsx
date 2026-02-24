import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/posts/${id}`);
      setPost(response.data);
    } catch(error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getPost();
  },[])

  const handleForm = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const { title,author,excerpt,content } = Object.fromEntries(formData.entries());

    let date = new Date();

    if(!title || !author || !excerpt || !content) {
      alert("Please fill all the required form fields");
      return;
    }
    try {
      await axios.put(`/api/posts/${id}`, {
        title,
        author,
        excerpt,
        content,
        createdAt: post.createdAt,
        updatedAt: date.toISOString()
      })
    } catch (error) {
      console.error(error);
    }
    navigate('/admin');
  };

  return (
    <div className="add-post">
      <div className="border bg-white p-8 mx-10 my-5 shadow-xl max-w-[600px] mx-auto">
        <h1 className="">Edit post</h1>
        <form onSubmit={handleForm}>
          <div className="form-group">
            <label htmlFor="title">Post title *</label>
            <input type="text" id="title" name="title" defaultValue={post.title} required />
          </div>
          <div className="form-group">
            <label htmlFor="author">Post author *</label>
            <input type="text" id="author" name="author" defaultValue={post.author} required />
          </div>
          <div className="form-group">
            <label htmlFor="excerpt">Post excerpt *</label>
            <textarea name="excerpt" id="excerpt" defaultValue={post.excerpt} required />
          </div>
          <div className="form-group">
            <label htmlFor="content">Post *</label>
            <textarea name="content" id="content" defaultValue={post.content} required />
          </div>
          <div className="text-right mt-2">
            <button type="submit" className='btn primary mr-2'>Save</button>
            <Link to="/admin" className="btn danger">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPost;