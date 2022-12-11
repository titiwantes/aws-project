import { Button } from '@aws-amplify/ui-react'
import React from 'react'
import Navbar from '../components/Navbar'
import useNavigate from 'react-router-dom'

export default function Home() {
    const history = useNavigate();
  return (
    <>
        <Navbar />
        Hello World !
        <Button onClick={history('/settings')}>Settings</Button>
    </>
  )
}
