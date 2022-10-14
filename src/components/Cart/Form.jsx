import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Form = () => {

  const { cartList, totalPrice, cleanCart } = useCartContext();
  
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
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
      console.log(result.id);
      cleanCart();
    })

    alert('Compra realizada con éxito');
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
  
  const handleClick = () => {

    setForm(...form, {name, surname, email});

    console.log(form);

  }

  return (
    <>
      <label htmlFor="name">Nombre:</label>
      <input type="text" onChange={handleName}/>

      <label htmlFor="surname">Apellido:</label>
      <input type="text" onChange={handleSurname}/>

      <label htmlFor="Phone">Email:</label>
      <input type="text" onChange={handleEmail}/>

      <button onClick={handleClick}>Confirmar Datos</button>
      
      <Link to='/'><button onClick={checkOut}>Finalizar Compra</button></Link>
    </>
  )
}
