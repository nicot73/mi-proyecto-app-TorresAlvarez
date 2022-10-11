import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Loader from '../Loader';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {

      const productCollection = collection(db, 'products');
      const refDoc = doc(productCollection, id);

      console.log(refDoc)

      getDoc(refDoc)
      .then((result) => {
        setListProduct(
          {
            id: result.id,
            ...result.data()
          }
        )
      })
      .catch((err) => {
        console.log("Error:", err);
        console.error("Error:", err);
      })
      .finally(() => {
        setLoading(false);
      })
      
    },[id])

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