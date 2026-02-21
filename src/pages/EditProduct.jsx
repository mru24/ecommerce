import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      console.log(response.data);
      setProduct(response.data);
    } catch(error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getProduct();
  },[])

  const handleForm = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { name, description, price } = Object.fromEntries(formData.entries());

    let date = new Date();

    if (!name || !price) {
      alert("Please fill all the required form fields");
      return;
    }
    try {
      await axios.put(`http://localhost:3001/products/${id}`, {
        name,
        description,
        price: Number(price),
        updatedAt: date.toISOString()
      })
    } catch (error) {
      console.error(error);
    }
    navigate('/admin');
  };

  return (
    <div className="add-product">
      <div className="border bg-white p-8 mx-10 my-5 shadow-xl max-w-[600px] mx-auto">
        <h1 className="">Edit product</h1>
        <form onSubmit={handleForm}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" defaultValue={product.name} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" defaultValue={product.description} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price *</label>
            <input type="number" id="price" name="price" step="0.01" defaultValue={product.price} required />
          </div>
          {/* <div className="form-group">
            <label htmlFor="tax">Tax *</label>
            <input type="number" id="tax" name="tax" required />
          </div> */}
          <div className="text-right mt-2">
            <button type="submit" className='btn primary mr-2'>Save</button>
            <Link to="/admin" className="btn danger">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;