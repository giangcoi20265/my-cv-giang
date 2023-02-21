
const ProductList = ({products}) => {
  return `${products.map((products)=>{
    return`
     <h3><a href="/product/${products.id}">${products.name}</a></h3>
     <h3>${products.price}</h3>
    `
}).join("")}`
    
  
};

export default ProductList;