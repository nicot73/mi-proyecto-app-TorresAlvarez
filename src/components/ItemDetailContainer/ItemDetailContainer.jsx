import React, { useState, useEffect } from 'react';
import { products } from '../../utils/products';
import ItemDetail from './ItemDetail';
import { customFetch } from '../../utils/customFetch';
import Loader from '../Loader';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
      setLoading(true);
      customFetch(products)
        .then(res => {
          setLoading(false);
          setListProduct(res.find(item => item.id === parseInt(id)));
        })
    },[])

    /*useEffect(() => {

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
  
    },{})*/

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