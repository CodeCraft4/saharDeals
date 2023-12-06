import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ArrowDownward, ArrowUpward, ShoppingBagOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useContext } from 'react';
import CurrentUseContext from 'context/Index';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: 300,
    overflowY: 'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { user, setUser } = useContext(CurrentUseContext)

    const pageAdd = (index) => {
        const addItem = user.filter((_, i) => i !== index)
        setUser(addItem)
    }

    const [add, setAdd] = useState({ user })

    const inCrement = (index) => {
        user[index].quantity = user[index].quantity + 1
        setAdd(add + user)
    }
    const deCrement = (index) => {
        if (user[index].quantity >= 1) {
            user[index].quantity = user[index].quantity - 1
            setAdd(add - user)
        }
    }

    return (
        <div>
            <Button onClick={handleOpen}><ShoppingBagOutlined fontSize='large' /></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} m={1} p={2}>
                            <Typography variant='h5' fontWeight={'bold'} fontStyle={'italic'} color={'error'}>Sahar Deals</Typography>
                            <Button variant='outlined' sx={{ background: 'gray', color: 'black', fontWeight: 'bold', fontSize: '14px' }} onClick={() => setUser([])}>Remove All</Button>
                        </Box>
                        <hr />
                        <Grid container spacing={3} position={'relative'}>
                            {user.map((i, index) => (
                                <Grid item md={12} sm={6} key={index} textAlign={'center'}>
                                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={4}>
                                        <img src={i.imgpath} alt="cardImage" width={'20%'} height={'80vh'}
                                        />
                                        <Typography variant='h5' p={2} fontFamily={'sans-serif'}>{i.title}</Typography>
                                        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                            <Button onClick={() => inCrement(index)}><ArrowUpward /></Button>
                                            <Typography>{i.quantity}</Typography>
                                            <Button onClick={() => deCrement(index)}><ArrowDownward /></Button>
                                        </Box>
                                        <Typography variant='body2' p={1} px={3} fontSize={'15px'}>${i.price * i.quantity}</Typography>
                                        <Button variant='contained' color='error' sx={{ p: 1 }} onClick={(i) => pageAdd(index)}>Remove</Button>
                                        <br />
                                        <hr />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                        <hr />
                        <Box p={1}>
                            {user.map((i) => {
                                return (
                                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography>Total :</Typography>
                                        <Typography>${i.price * i.quantity}</Typography>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
