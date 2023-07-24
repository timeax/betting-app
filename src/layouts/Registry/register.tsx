import React from 'react';
import { ReplyOutlined as LoginIcon, PersonOutline, Mail, Lock } from '@mui/icons-material';
import { IconButton, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import Header from './header'
import TextField from './TextField';
import Alternate from './alternate';

const Register: React.FC = () => {
    const redirect = useNavigate();
    function signUp() {
        redirect('/login');
    }

    return (
        <div className='d-flex flex-column h-100 registry'>
            <div className="d-flex">
                <Link to={'/login'}>
                    <IconButton aria-label='login'><LoginIcon /></IconButton>
                </Link>
            </div>
            <Header type='register' />
            <div className="form-bar">
                <TextField icon={<PersonOutline />} className='mb-3' placeholder='Username' />
                <TextField icon={<Mail />} className='mb-3' placeholder='Email' />
                <TextField icon={<Lock />} className='mb-3' placeholder='Password' />
                <Button onClick={signUp} variant="contained" size="small">Sign up</Button>
            </div>
            <Alternate type='register' />
        </div>
    )
}

export default Register