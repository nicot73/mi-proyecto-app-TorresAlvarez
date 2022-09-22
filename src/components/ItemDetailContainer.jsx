import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Loader from './Loader';
import styled from 'styled-components';

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({});
    const [loading, setLoading] =useState(true);

    useEffect(() => {

      const getItem = async () => {
  
        try {
          const res = await fetch('https://fakestoreapi.com/products/14');
          const data = await res.json();
          setListProduct(data);
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
  
    },{})

  return (
    <DetailContainer>
        {!loading ? <ItemDetail listProduct={listProduct}/> : <Loader/>}
    </DetailContainer>
  )
}

export default ItemDetailContainer;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`