import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loader from '../Loader';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import '../InsertFont.css';


const ItemListContainer = ({ greeting }) => {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
    .catch((error) => {
      console.error(error);
      setError('Lo sentimos, no encontramos ese producto.');
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
    font-family: "GrandGalaxy";
    font-size: 1.5rem;
    font-style: italic;
    font-weight: bold;
    text-align: center;
  }
`