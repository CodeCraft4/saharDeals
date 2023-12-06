import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import CurrentUseContext from 'context/Index';

const itemsPerPage = 3;

const CardPagination = ({ PRODUCT_CARD }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };


  const { user, setUser } = useContext(CurrentUseContext)


  const handleAdd = (i, index) => {

    const pageCard = user.filter((e) => e?.id === i?.id)


    if (user.find((e) => e.id === i.id)) {

      const removeCard = user.filter((e) => e.id !== index)
      setUser(removeCard)

    }
    else{
      user.push({...i,quantity:1})
      setUser(user)
    }
    console.log(user)

  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container spacing={3} position={'relative'}>
  
          {  PRODUCT_CARD.slice(indexOfFirstItem, indexOfLastItem).map((i, index) => (
            <Grid item md={4} sm={6} key={index} textAlign={'center'}>
              <img src={i.imgpath} alt="cardImage" width={'100%'} height={'380vh'}
                style={{ borderRadius: '100%', filter: 'brightness(50%)', objectFit: 'cover' }}
              />
              <Typography variant='h5' p={2} fontFamily={'sans-serif'}>{i.title}</Typography>
              <Button variant='contained' color='error' sx={{ p: 1 }} onClick={() => handleAdd(i,index)}>Buy Now</Button>
            </Grid>
          ))}
        </Grid>
        <Stack mt={5}>
          <Pagination
            count={Math.ceil(PRODUCT_CARD.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            sx={{
              textAlign: 'center',
              m: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </Stack>
      </Container>
    </div>
  );
};

export default CardPagination;
