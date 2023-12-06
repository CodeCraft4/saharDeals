import { Box, Grid, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Box p={4} bgcolor={'#263238'} mt={8}>
        <Typography variant='h4'
          sx={{
            fontStyle: 'italic',
            textDecoration: 'underline',
            textAlign: "center",
            fontWeight: 'bold',
            color: 'white',

          }}
        >SaharDeals</Typography>


        <Grid container mt={10}>
          <Grid item md={6} sm={6} color={'white'} mt={8}>
            <Typography variant='h4' p={2} fontWeight={'bold'} fontSize={{ md: '30px', xs: '20px' }}>Contact Information</Typography>
            <Typography variant='h5' fontWeight={'bold'} p={1} mx={2} fontSize={{ md: '25px', xs: '15px' }}>0542339405</Typography>
            <Typography variant='h5' fontStyle={'italic'} p={1} mx={2} fontSize={{ md: '25px', xs: '15px' }}>contactus@sahardeals.com</Typography>
          </Grid>
          <Grid item md={6} sm={6} color={'white'}>
            <Typography variant='h5' textAlign={'center'} p={2} fontWeight={'bold'}>Send Feedback</Typography>

            <Box>
              <InputLabel htmlFor="Email">
              </InputLabel>
              <TextField
                required
                id='Email'
                typeof='email'
                placeholder='Your Email'
                fullWidth
                sx={{ bgcolor: 'white', borderRadius: '10px', outline: "none" }}
              />
              <br />
              <br />
              <TextField
                id="outlined-multiline-static"
                placeholder='Your Message'
                fullWidth
                multiline
                rows={6}
                sx={{ bgcolor: 'white', borderRadius: '10px' }}
              />
              <br />
              <br />
              <TextField
                type='submit'
                value={'Send Message'}
                sx={{ bgcolor: 'white', display: 'flex', m: 'auto', width: { md: '20%', xs: "70%" }, borderRadius: '8px' }}
              />
            </Box>
          </Grid>
        </Grid>


      </Box>
    </div>
  )
}

export default Footer
