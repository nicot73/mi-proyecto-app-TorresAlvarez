import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import ItemCount from './ItemCount';
import { products } from '../assets/products';
import { customFetch } from '../utils/customFetch';
import styled from 'styled-components';


const ItemListContainer = ({greeting}) => {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    setLoading(true);
    customFetch(products)
      .then(res => {
        setLoading(false);
        setListProducts(res);
      })
  },[])



  return (
    <DivContainer>
      <div className='msj'>{greeting}</div>
      {loading ? "CARGANDO..." : <ItemList listProducts={listProducts}/>}
      
      <ItemCount initial={1} stock={10} onAdd={() => {}}/>
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