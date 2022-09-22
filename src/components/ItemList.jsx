import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const ItemList = ({ listProducts }) => {

  return (
    <ProductsContainer>
      {listProducts.map((product, i) => <Item key={`${product.id}-${i}`} product={product}/>)}
    </ProductsContainer>
  )
}

export default ItemList;

const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`