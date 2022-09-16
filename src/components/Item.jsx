import React from 'react'

const Item = ({product}) => {
    console.log(product)
  return (
    <>
        <h2>{product.category}</h2>
        <img src={product.image} alt="img" />
        <p>Precio: ${product.price}</p>
        <button>Ver Detalle</button>
    </>
    
  )
}

export default Item;