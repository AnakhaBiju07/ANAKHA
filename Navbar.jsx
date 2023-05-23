import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'red'} sx={{ flexGrow: 1}} align='left'>NewApp</Typography>
                <Button variant='text' color='error'></Button>
            </Toolbar>
        </AppBar>
    </div>    
  )
}

export default Navbar