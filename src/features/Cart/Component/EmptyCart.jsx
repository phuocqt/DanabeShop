import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmptyCart(props) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
        alt=""
        class="empty__img"
      ></img>
      <Typography pt={3} pb={3} variant="h6">
        Chưa có sản phẩm trong giỏ hàng
      </Typography>
      <Button
        onClick={() => {
          navigate('/products');
        }}
        variant="contained"
      >
        Tiếp Tục Mua Sắm
      </Button>
    </Box>
  );
}

export default EmptyCart;
