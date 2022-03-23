import React from 'react'
import { Stack, Link } from '@mui/material'

const MuiLink = () => {
  return (
    <Stack
      spacing={2}
      direction='row'
      m={4}
    >
      <Link href='#'>Link</Link>
      <Link href='#' color='secondary'>Link</Link>
      <Link href='#' color='secondary' underline='hover' variant='h5'>Underline on hover</Link> 
    </Stack>
  )
}

export default MuiLink