import React from 'react'
import { Routes } from '../../routes';
import { useLocation, Link } from 'react-router-dom';

const Footer: React.FC<Props> = ({ routes }) => {
    return (
        <div className='footer'>
            <div className="app-container d-flex">
                {
                    routes.map(item => {
                        return <Nav
                            key={item.id}
                            text={item.name}
                            icon={item.icon}
                            route={item.route} />
                    })
                }
            </div>
        </div>
    )
}

const Nav: React.FC<{ text: string, icon: React.ReactElement, route: string }> = ({
    icon, text, route
}) => {
    const loc = useLocation();
    let active = false;
    if (loc.pathname === route) active = true;
    return (
        <div className={`footer-navitem flex-grow-1 ${active ? 'current' : ''}`}>
            <Link to={route} className="iconBox">
                {icon}
                <span className='nav-text'>{text}</span>
            </Link>
        </div>
    )
}

interface Props {
    routes: Routes
}

export default Footer