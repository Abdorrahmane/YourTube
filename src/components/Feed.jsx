import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import {SideBar} from './'

function Feed() {

    return (
        <Stack
            sx={{
                flexDirection:{
                    sx:'column',
                    md:'row'
                }
            }}
        >
            <Box sx={{
                height:{
                    sx: 'auto',
                    md: '92vh'                   
                }, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}
            }}
            >
                <SideBar/>
                <Typography variant='subtitle2' sx={{mt:1.5, color:'#fff', fontWeight:'light', fontSize:'0.6rem'}}>
                    Copyright 2023 Design Plus
                </Typography>
            </Box>
        </Stack>
    )
}

export default Feed
