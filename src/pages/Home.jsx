import { Button } from '@aws-amplify/ui-react'
import React from 'react'
import Navbar from '../components/Navbar'
import {useNavigate} from 'react-router-dom'
import { Auth } from 'aws-amplify'

export default function Home() {
    const history = useNavigate();

  return (
    <>
        <Navbar />
        <h1>Home</h1>        
    </>
  )
}
