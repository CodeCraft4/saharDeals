import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, List } from '@mui/material';
import TransitionsModal from './Modal';


function Navigation() {
    return (
        <AppBar position="static" sx={{ bgcolor: 'white' }} elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: "bold",
                            fontStyle: 'italic',
                            fontSize: '30px',
                            letterSpacing: '.3rem',
                            color: 'red',
                            textDecoration: 'none',
                        }}
                    >
                        SaharDeal
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'red',
                            textDecoration: 'none',
                        }}
                    >
                        SaharDeals
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <List>
                            <Link href='#' mx={2} fontSize={'20px'} sx={{ textDecoration: 'none', color: 'gray' }}>About</Link>
                            <Link href='#' fontSize={'20px'} sx={{ textDecoration: 'none', color: 'gray' }}>Shop</Link>
                        </List>
                    </Box>
                    <Box>
                     <TransitionsModal/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navigation;
