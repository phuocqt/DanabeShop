import { Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartIterm from './Component/CartIterm';
import EmptyCart from './Component/EmptyCart';
import { totalPriceAll } from './selector';

function Cart(props) {
  const product = useSelector((state) => state.cart.cartItems);
  const handleChange = (values) => {
    console.log(values);
  };
  const priceAll = useSelector(totalPriceAll);

  return (
    <div>
      {!product.length ? (
        <EmptyCart />
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={9} md={9}>
            <Paper elevation={1}>
              {product.map((item, index) => (
                <CartIterm key={index} product={item.product} index={index} onChange={handleChange} />
              ))}
            </Paper>
          </Grid>
          <Grid item xs={3} md={3} mt={2}>
            <Paper elevation={1} sx={{ paddingTop: '20px' }}>
              <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
                <Box display="flex" justifyContent="space-between" pl={2} pr={2}>
                  <Typography>Tổng Tiền:</Typography>
                  <Box component="span" fontSize="16px">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceAll)}
                  </Box>
                </Box>

                <Button variant="contained">MUA HÀNG</Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Cart;
