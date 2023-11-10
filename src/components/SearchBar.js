import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React from 'react'

function SearchBar() {
    return (
        <Paper
            component='form'
            onSubmit={() => {}}
            sx={{
                borderRadius:"50px",
                border:"1px solid gray",
                pl:2,
                boxShadow:"none",
                mr: { sm: 5 }
            }}
        >
            <input 
                className="search-bar"
                placeholder="Search..."
                //value=""
                onChange={() => {}}
                style={{
                    border:'none'
                }}
             />
            <IconButton 
                type="submit"
                sx={{
                    p:"10px",
                    color:"red",
                    border:"1px solid gray"
                }}
                >
                <Search/>
            </IconButton>

        </Paper>
    )
}

export default SearchBar
