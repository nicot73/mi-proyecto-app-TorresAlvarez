import React from 'react';
import Item from './Item';

const ItemList = ({listProducts}) => {

  return (
    <>
        {listProducts.map((product, i) => <Item key={`${product.id}-${i}`} product={product}/>)}
    </>
  )
}

export default ItemList;