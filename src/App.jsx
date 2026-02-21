import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import AddProduct from './pages/AddProduct'
import AddPost from './pages/AddPost'
import EditProduct from './pages/EditProduct'
import EditPost from './pages/EditPost'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/posts/add" element={<AddPost />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
