import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/consts'
import {SearchBar} from './'

function Navbar() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{position:"sticky", background:"#000", top:0, justifyContent:'space-between'}}
        >
            <Link to='/'  style={{display:'flex', alignItems:'center', background:''}}>
                <img src={logo} alt="YourTube logo" className="fluid"  height={35}/>
            </Link>
            <SearchBar/>
        </Stack>
    )
}

export default Navbar
