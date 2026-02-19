import Product from "./Product";

const ProductsGrid = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>

  )
}

export default ProductsGrid;