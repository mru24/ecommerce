import axios from 'axios';
import { useState, useEffect } from 'react'

const Shop = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className="shop container mx-auto p-6">
      shop
    </div>
  )
}

export default Shop;