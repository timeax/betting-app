import React from 'react'
import Header from './header'
import TextField from './TextField'
import { PersonOutline, Lock } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Alternate from './alternate';



const Login: React.FC = () => {
    const navigate = useNavigate();

    function signIn() {
        console.log('clicked')
        navigate('/')    
    }

    return (
        <div className='d-flex flex-column h-100 registry'>
            <Header type='login' />
            <div className="form-bar">
                <TextField icon={<PersonOutline />} className='mb-3' placeholder='Username' />
                <TextField icon={<Lock />} className='mb-3' placeholder='Password' />
                <Button onClick={signIn} variant="contained" size="small">
                    Sign in
                </Button>
            </div>
            <Alternate type='login' />
            <div className="mt-auto mb-3">
                <p className='text-center'>Don't have an account? <Link className='text-decoration-none text-primary' to={'/register'}>Sign up here</Link></p>
            </div>
        </div>
    )
}

export default Login