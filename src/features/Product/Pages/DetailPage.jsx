import { Box, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

import { useParams } from 'react-router-dom';
import AddtocartForm from '../components/AddtocartForm';
import ProductDetail from '../components/ProductDetail';

import ThumbnailProduct from '../components/ThumbnailProduct';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles({
  root: {},
  left: {
    padding: 1.5,
    width: '400px',
    borderRight: `1px solid red`,
  },

  right: {
    padding: 1.5,
    flex: '1 1 0',
  },
});

function DetailPage(props) {
  const classes = useStyles();
  const { productId } = useParams();

  const { product, loading } = useProductDetail(productId);
  const handleAddToCart = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              {loading ? <Box>Loading</Box> : <ThumbnailProduct product={product} />}
            </Grid>
            <Grid item className={classes.right}>
              <ProductDetail product={product} />
              <AddtocartForm onSubmit={handleAddToCart} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
