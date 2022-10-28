import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import swal from 'sweetalert';
import '../InsertFont.css';

export const Form = () => {

  const { cartList, totalPrice, cleanCart } = useCartContext();
  
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [direction, setDirection] = useState('');
  const [loadForm, setLoadForm] = useState(false);
  const [form, setForm] = useState([]);
  
  const checkOut = () => {

    const salesCollection = collection(db, "sales");
    
    addDoc(salesCollection, {
      user: form,
      items: cartList,
      date: serverTimestamp(),
      total: totalPrice(),
    })
    .then(result => {
      swal({
        title: "¡Felicitaciones!",
        text: "Tu compra ha sido realizada con éxito.",
        icon: "success",
      });
      cartList.forEach(product => {
        upDateStock(product);
      });
    })

    cleanCart();
  }

  const upDateStock = (prod) =>{
    const modifyStock = doc(db, "products", prod.id);
    updateDoc(modifyStock, {stock:(prod.stock - prod.quantity)});
  }

  const handleName = (event) => {
    setName(event.target.value);
  }
  const handleSurname = (event) => {
    setSurname(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handlePhone = (event) => {
    setPhone(event.target.value);
  }
  const handleLocation = (event) => {
    setLocation(event.target.value);
  }
  const handleDirection = (event) => {
    setDirection(event.target.value);
  }
  
  const handleClick = () => {
    setForm(...form, {name, surname, email, phone, location, direction});
    setLoadForm(true);
  }

  return (
    <FormContainer>
      <h2>Completa el formulario</h2>

      <div className='divForm'>
        <label htmlFor="name">Nombre:</label>
        <input type="text" onChange={handleName}/>

        <label htmlFor="surname">Apellido:</label>
        <input type="text" onChange={handleSurname}/>

        <label htmlFor="email">Email:</label>
        <input type="email" onChange={handleEmail}/>

        <label htmlFor="phone">Telefono:</label>
        <input type="number" onChange={handlePhone}/>

        <label htmlFor="location">Localidad:</label>
        <input type="text" onChange={handleLocation}/>

        <label htmlFor="direction">Direccion:</label>
        <input type="text" onChange={handleDirection}/>
      </div>

      <div className='divButtons'>
        {loadForm === false
          ? 
            <button onClick={handleClick}>Confirmar Datos</button>
          : 
            <Link to='/'><button onClick={checkOut}>Finalizar Compra</button></Link>
        } 
      </div>
      
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2 {
    font-family: "GrandGalaxy";
    font-size: 1.2rem;
    font-style: italic;
  }

  label {
    padding: 10px;
  }

  input {
    width: 250px;
    height: 25px;
    margin-bottom: 10px;
  }

  button {
    background-color: #333;
    color: #FF6701;
    border: none;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    font-weight: bolder;
    font-family: 'Montserrat';
    font-size: 15px;
    cursor: pointer;
  }
  button:hover {
    background-color: #FF6701;
    color: #333;
  }

  .divForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 10px 30px;
    border: solid 1px #e9e9e9;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .divButtons {
    display: flex;
    flex-flow: row wrap;
  }
`