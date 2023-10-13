import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../Assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={
      {gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px='20px'>

      <Link to="/"> 
        <img src={Logo} alt="Logo" style={{width: '48px', height: '48px', margin: '0 20px'}} />
      </Link>
      <stack direction ="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" stlye={{ textDecoration: 'none', color: '##ff2625', borderBottom: '3px solid #ff2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}> Exercises</a>
      </stack>
    </Stack>
  )
}

export default Navbar