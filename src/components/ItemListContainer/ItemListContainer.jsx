import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loader from '../Loader';
import styled from 'styled-components';
import { products } from '../../utils/products';
import { customFetch } from '../../utils/customFetch';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  let { category } = useParams();

  useEffect(() => {
    setLoading(true);
    customFetch(products)
      .then(res => {
        if (category) {
          setLoading(false);
          setListProducts(res.filter(prod => prod.category === category));
        } else {
          setLoading(false);
          setListProducts(res);
        }
      })
  },[category])

  /*useEffect(() => {

    const getItem = async () => {

      try {
        const res = await fetch(IdCategory ? `${urlCategory}/${IdCategory}` : `${urlBase}`);
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

  },[IdCategory])*/

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