import React from 'react'
import logo from '../../assets/imgs/logo.png'
import CircularProgress from '@mui/material/CircularProgress';

const Opening = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center initial-page'>
      <div className="image-box" style={{ backgroundImage: `url(${logo})` }} />
      <div className='text-white pt-4 text-center'>
        <CircularProgress color='inherit' />
        <span className='d-block text-capitalize'>Getting ready</span>
      </div>
    </div>
  )
}

export default Opening