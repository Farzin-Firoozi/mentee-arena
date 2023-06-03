import React from 'react'
import error from '../images/error.png'

//mui
import Button from '@mui/material/Button';
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';

//rrd
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className='error'>
        <img width={40} src={error} alt='error' style={{ marginTop: '17%' }} />
        <h5>could not find this page!</h5>
        <Button variant="contained" startIcon={<RoofingRoundedIcon/>}>
        <Link to='/' style={{color:'white', fontSize: '10px'}} >Back HOME</Link>
        </Button>

    </div>
  )
}

export default Error