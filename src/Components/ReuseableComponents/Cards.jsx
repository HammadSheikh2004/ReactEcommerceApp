import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import '../Helper/Cards.css';
import ButtonComp from './ButtonComp';

const Cards = ({img, title, desc, click, addToCart}) => {
    return (
        <>
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={img}
                title={title} />
              <CardContent>
                <Typography gutterBottom className='proDesc' component="div">
                  {title}
                </Typography>
                <Typography variant="body2" className='proDesc' color="text.secondary">
                  {desc}
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonComp btnTitle="View Products" onclick={click}/>
                <ButtonComp btnTitle="Add to Cart" onclick={addToCart}/>
              </CardActions>
            </Card>
            </Grid>
        </>
    )
}

export default Cards