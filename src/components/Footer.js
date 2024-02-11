import React from 'react'

import Logo from '../assets/images/Logo-1.png';
import { Box, Stack, Typography } from '@mui/material';
function Footer() {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px"  alignItems='center' flexWrap="wrap" px="40px" pt="24px">
    <img src={Logo} alt='Logo'  width= '200px'  height= '41px'  />
    </Stack>
    <Typography variant="h5" pb="40px"  mt="20px" textAlign="center" >Made with ❤️ by JavaScript Mastery</Typography>
    </Box>
  )
}

export default Footer