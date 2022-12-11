import React from 'react';
import Navbar from '../components/Navbar';
import {useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';

const Settings = () => {
    const history = useNavigate();
    
    return (
        <>
            <Navbar />
            <h1>Settings</h1>
        </>
    );
}

export default Settings;
