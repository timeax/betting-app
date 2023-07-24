import React from 'react'
import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import { routes } from '../routes';

const Layout: React.FC<Props> = ({ children, footer, header, search }) => {
  return (
    <>
      {header ? <Header search={search} /> : ''}
      {children}
      {footer ? <Footer routes={routes.filter(item => item.isNav)} /> : ''}
    </>
  )
}

export default Layout;

interface Props {
  header?: boolean;
  footer?: boolean;
  children: React.ReactElement;
  search?: boolean
}

