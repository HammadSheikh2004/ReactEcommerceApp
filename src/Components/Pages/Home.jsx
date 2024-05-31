import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { Context } from '../ContextApi/Context';
import Cards from '../ReuseableComponents/Cards';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Helper/MyFunctions';

const Home = () => {
  const navigate = useNavigate();
  const { apiData, productsCount } = useContext(Context);
  const getProducts = (e) => {
    console.log(e);
    navigate(`/products/${e.id}`, { state: { key: e } });
  }
  return (
    <>
      <Container sx={{ marginTop: "80px" }}>
        <Grid container columnSpacing={5} rowSpacing={2}>
          {
            apiData ? apiData && apiData.map((data, index) => {
              return (
                <Cards key={index} title={data.title} img={data.thumbnail} desc={data.description} click={() => { getProducts(data) }} addToCart={() => {
                  if (addToCart(data)) {
                    productsCount(JSON.parse(localStorage.getItem("carts").length));
                    alert("Products Added!");
                  } else {
                    alert("Products Already Exists!");
                  }
                }} />
              )
            })
              : <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%' }}>
                <CircularProgress />
              </Box>
          }
        </Grid>
      </Container>
    </>
  )
}

export default Home