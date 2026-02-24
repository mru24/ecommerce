import axios from 'axios';
import { Link } from 'react-router';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

  const navigate = useNavigate();

  const handleForm = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const { name,description,price,image } = Object.fromEntries(formData.entries());

    let date = new Date();

    if( !name || !price || !description ) {
      alert("Please fill all the required form fields");
      return;
    }

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: {
          name,
          description,
          price,
          image
        }
      })
      const data = await response.json()
      if(response.ok) {
        navigate('/admin');
      }
      else if( response.status === 400) {
        alert("Validation errors")
      }
      else {
        alert("unable to create the product")
      }
    } catch(error) {
      console.error(error);
    }

  };

  return (
    <div className="add-product">
      <div className="border bg-white p-8 mx-10 my-5 shadow-xl max-w-[600px] mx-auto">
        <h1 className="">Add product</h1>
        <form onSubmit={handleForm}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price *</label>
            <input type="number" id="price" name="price" step="0.01" className="max-w-[150px]" required />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="file" id="image" name="image" />
          </div>
          <div className="text-right mt-2">
            <button type="submit" className='btn primary mr-2'>Add Product</button>
            <Link to="/admin" className="btn danger">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;