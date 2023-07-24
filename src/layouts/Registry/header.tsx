import React from 'react'
import logo from '../../assets/imgs/logo.svg';

const Header: React.FC<Props> = ({ type }) => {
    return (
        <div className='mx-auto mt-5 registry-header'>
            <object type='image/svg+xml' className='logo' data={logo}><img src={logo} alt="logo" /></object>
            {type === 'login'
                ? <div>
                    <h2>Welcome back!</h2>
                    <p>Login to your account</p>
                </div>
                : <div>
                    <h2>Welcome!</h2>
                    <p>Create your account</p>
                </div>
            }
        </div>
    )
}

export default Header;

interface Props {
    type: 'login' | 'register'
}