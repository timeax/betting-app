/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { Search, Add, Email, Phone, Person3, MonetizationOn } from '@mui/icons-material'
import profile from '../imgs/profile.jpg'
import Chip from '@mui/material/Chip';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '../../layouts/Registry/TextField';
import { usePaystackPayment } from 'react-paystack'
import { useNavigate } from 'react-router-dom'
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};


const Header: React.FC<Props> = ({ search }) => {
    const [amount, setAmount] = useState(0);
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const publicKey = 'pk_test_ee8e5ff914e1bd17083e243fa576504a7fbba212';
    const redirect = useNavigate();
    const paymentStart = usePaystackPayment({
        email,
        amount,
        metadata: {
            name,
            phone,
            custom_fields: []
        },
        publicKey
    });

    function pay() {
        if (amount < 1) return;
        if (!email) return;
        if (!name) return;
        paymentStart(() => {
            handleClose();
        }, () => { handleClose() })
    }

    function addMoney() {
        handleOpen()
    }
    return (
        <header>
            <div className="container">
                <div className="iconBox">
                    <img src={profile} onClick={() => redirect('/login')} alt="profile" />
                </div>
                <Chip
                    sx={{
                        marginLeft: '1.5rem',
                        backgroundColor: 'transparent'
                    }}
                    clickable={true}
                    onClick={addMoney}
                    label={<Money amount={amount * 100} />}
                    size='small' variant='outlined' />

                <div className="ms-auto">
                    {search ? <Search /> : ''}
                </div>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className='d-flex align-items-center mb-4'>
                            <hr className="flex-grow-1" />
                            <span className="mx-2">Deposit</span>
                            <hr className="flex-grow-1" />
                        </div>
                        <div className="form">
                            <TextField onChange={setName} icon={<Person3 />} className='mb-3' placeholder='Full Name' />
                            <TextField onChange={setEmail} icon={<Email />} className='mb-3' placeholder='Email' />
                            <TextField onChange={setPhone} icon={<Phone />} className='mb-3' placeholder='Phone number' />
                            <TextField onChange={(value: string) => {
                                // console.log(typeof value, value)
                                let am = parseInt(value) / 100;
                                setAmount(am)
                            }} type='number' icon={<MonetizationOn />} className='mb-3' placeholder='Amount' />
                        </div>
                        <Button variant='contained' onClick={pay}>Continue</Button>
                    </Box>
                </Fade>
            </Modal>
        </header>
    )
}

interface Props {
    search?: boolean
}

const Money: React.FC<{ amount: string | number }> = ({ amount }) => {
    return (
        <div className="d-flex align-items-center money">
            <span>${amount}</span>
            <Add />
        </div>
    )
}

export default Header