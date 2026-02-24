import axios from 'axios';
import { Link } from 'react-router';
import { useNavigate } from "react-router-dom";

const AddPost = () => {

  const navigate = useNavigate();

  const handleForm = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const {title,author,excerpt,content} = Object.fromEntries(formData.entries());

    let date = new Date();

    if(!title || !author || !excerpt || !content) {
      alert("Please fill all the required form fields");
      return;
    }
    try {
      await axios.post("/api/posts", {
        id: crypto.randomUUID(),
        title,
        author,
        excerpt,
        content,
        createdAt: date.toISOString()
      })
    } catch(error) {
      console.error(error);
    }
    navigate('/admin');
  };

  return (
    <div className="add-post">
      <div className="border bg-white p-8 mx-10 my-5 shadow-xl max-w-[600px] mx-auto">
        <h1 className="">Add post</h1>
        <form onSubmit={handleForm}>
          <div className="form-group">
            <label htmlFor="title">Post title *</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div className="form-group">
            <label htmlFor="author">Post author *</label>
            <input type="text" id="author" name="author" required />
          </div>
          <div className="form-group">
            <label htmlFor="excerpt">Post excerpt *</label>
            <textarea name="excerpt" id="excerpt" required />
          </div>
          <div className="form-group">
            <label htmlFor="content">Post *</label>
            <textarea name="content" id="content" required />
          </div>
          <div className="text-right mt-2">
            <button type="submit" className='btn primary mr-2'>Add Post</button>
            <Link to="/admin" className="btn danger">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPost;