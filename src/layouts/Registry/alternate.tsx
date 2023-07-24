import React from 'react';
import { Google, Twitter, FacebookOutlined as FacebookIcon } from '@mui/icons-material'

const Alternate: React.FC<{ type: 'login' | 'register' }> = ({ type }) => {
    return (
        <div className='registry-alternative mt-5'>
            <div className="titlebar d-flex">
                <hr />
                <span>
                    {type === 'login'
                        ? 'Or sign in with'
                        : 'Or sign up with'
                    }
                </span>
                <hr />
            </div>
            <div className="registry-options">
                <Card icon={<Google />} link='#' />
                <Card icon={<FacebookIcon style={{ color: '#415ba8' }} />} link='#' />
                <Card icon={<Twitter />} link='#' />
            </div>
        </div>
    )
}

const Card: React.FC<{ link: string, icon: React.ReactElement }> = ({ link, icon }) => {
    return (
        <a href={link} className='card'>
            {icon}
        </a>
    )
}

export default Alternate