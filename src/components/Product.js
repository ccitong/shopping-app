function Product (props){
  return(
    <div>
      <p>Product Name: {props.name}</p>
      <p>Price: ${props.price}</p>
      <a href="#">Click to learn more</a>
    </div>
  )
}
export default Product

Product.defaultProps = {
  name: "Avocados",
  price: "99.99"
}