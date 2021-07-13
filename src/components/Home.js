import React from 'react'
import { auth } from "../firebase";
import { Form } from './Form';

export const Home = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Form />
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </>
  )
}
