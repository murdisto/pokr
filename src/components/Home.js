import React from 'react'
import { firebase } from "../firebase";

export const Home = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
    </>
  )
}
