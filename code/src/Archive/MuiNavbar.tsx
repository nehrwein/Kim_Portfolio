import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import MuiDrawer from './MuiDrawer';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

const MuiNavbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Contact</Button>
          <MuiDrawer />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar