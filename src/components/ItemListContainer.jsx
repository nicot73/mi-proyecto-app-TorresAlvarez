import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loader from './Loader';
import styled from 'styled-components';


const ItemListContainer = ({ greeting }) => {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] =useState(true);

  useEffect(() => {

    const getItem = async () => {

      try {
        const res = await fetch('https://fakestoreapi.com/products/category/electronics');
        const data = await res.json();
        setListProducts(data);
      }
      catch(err) {
        console.log("Error:", err);
        console.error("Error:", err);
      }
      finally {
        setLoading(false);
      }
    }

    getItem();

  },[])

  return (
    <DivContainer>
      <div className='msj'>{greeting}</div>

      {loading ? <Loader/> : <ItemList listProducts={listProducts}/>}
    </DivContainer>
  )
}

export default ItemListContainer;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .msj {
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: bold;
  }
`