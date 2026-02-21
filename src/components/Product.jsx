

const Product = ({product}) => {

  return (
    <div className="product shadow">
      {product.imageFilename ?
        `<img src="assets/images/${product.imageFilename}" />` :
        '<img src="assets/images/noimage.jpg" />' }
      {product.name}
    </div>
  )
}

export default Product;