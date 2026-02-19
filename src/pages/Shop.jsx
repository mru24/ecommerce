import axios from 'axios';
import { useState, useEffect } from 'react'

import ProductsGrid from '../components/ProductsGrid';

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
    <div className="shop container mx-auto">
      <h2>Products</h2>
      { products.length>0 && (
        <ProductsGrid products={products} />
      )}
    </div>
  )
}

export default Shop;