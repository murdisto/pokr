import React from 'react'
import { firebase } from "../firebase";
import { Form } from './Form';

export const Home = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Form />
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
    </>
  )
}
