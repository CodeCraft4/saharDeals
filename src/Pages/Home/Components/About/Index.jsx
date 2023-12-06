import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <div>
            <Typography variant='h2' textAlign={'center'} color={'red'} mt={10}>About</Typography>
            <Box position={'relative'}>
                <img src="https://sahardeals.com/assets/images/clothes_9.jpg" alt=""
                 width={'100%'} 
                 height={600}
                 style={{filter:'brightness(40%)',backgroundAttachment:'fixed'}}
                 />
                <Box position={'absolute'} top={0}>
                    <Typography
                        color={'white'}
                        display={'flex'}
                        m={'auto'}
                        justifyContent={'center'}
                        width={{md:'40%',sm:'60%',xs:'100%'}}
                        fontSize={{md:'23px',sm:'20px',xs:'16px'}}
                        textAlign={'center'}
                        mt={15}
                        alignItems={'center'}
                    >
                        Welcome to Sahar Deals, your one-stop-shop for premium kitchen products. From top-notch knife sets to ergonomic cookware, we offer a carefully curated collection that combines uncompromising quality with functionality. Whether you're a seasoned chef or a cooking enthusiast, our diverse range of kitchen essentials will elevate your culinary experience to new heights. Discover the missing ingredients to make your kitchen truly exceptional and embark on a delightful cooking journey with us.</Typography>
                </Box>
            </Box>
        </div>
    )
}

export default About
