import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loader from '../Loader';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';


const ItemListContainer = ({ greeting }) => {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  let { category } = useParams();

  useEffect(() => {

    const productsCollection = collection(db, 'products');
    const productCategory = query(productsCollection, where('category', '==', `${category}`));

    let url = (category === undefined ? productsCollection : productCategory)

    getDocs(url)
    .then((data) => {

      const list = data.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setListProducts(list);
    })
    .catch((err) => {
      console.log("Error:", err);
      console.error("Error:", err);
    })
    .finally(() => {
      setLoading(false);
    })

  },[category])

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