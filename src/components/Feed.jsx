import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import {SideBar, Videos} from './'
import { fetch } from '../utils/api'

function Feed() {
    const [selectedCategory, setSelectedCategory] = useState("New")
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetch(`search?part=snippet&q=${selectedCategory}`)
        .then((res)=>{
            setVideos(res?.data?.items)
        })
        .catch((err)=> alert(err)) ;

    }, [selectedCategory])
    
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
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

                <Typography variant='subtitle2' sx={{mt:1.5, color:'#fff', fontWeight:'light', fontSize:'0.6rem'}}>
                    Copyright 2023 Design Plus
                </Typography>
            </Box>
            <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}} >
                <Typography variant='h4' 
                    fontWeight='bold' mb={2} µ
                    sx={{color:'white'}} 
                >
                    {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed
