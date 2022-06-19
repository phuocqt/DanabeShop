import { Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, activeProduct, removeFromCart } from '../cartSlice';
import QuantityCartListForm from './QuantityCartListForm';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { totalPriceAll } from '../selector';
import { useLocation, useNavigate } from 'react-router-dom';

function CartIterm({ product, onChange, index }) {
  const navigate = useNavigate();
  const location = useLocation();
  const active = useSelector((state) => state.cart.cartItems[index].active);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleChoice = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    const action = activeProduct({
      index,
    });
    dispatch(action);
  };
  const handleAddToCart = (values) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity: values.quantity,
      active: true,
    });
    dispatch(action);
  };
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  const quantity = useSelector((state) => state.cart.cartItems[index].quantity);

  const totalPrice = product.salePrice * quantity;
  const handleRemove = () => {
    const action = removeFromCart({
      index,
      id: product.id,
    });
    dispatch(action);
    console.log(product.id);
  };

  const handleClick = () => {
    navigate('/products/' + product.id);
  };

  return (
    <Box mt={3}>
      <Grid container spacing={1} sx={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
        <Grid item xs={2} md={1} ml={2}>
          <FormControlLabel control={<Checkbox checked={active} size="small" onChange={handleChoice} />} label="" />
        </Grid>
        <Grid item xs={2} md={2}>
          <img src={thumbnailUrl} alt={product.name} width="20%" />
        </Grid>
        <Grid item xs={2} md={2}>
          <Box component="span" fontSize="16px" sx={{ cursor: 'pointer' }} onClick={handleClick}>
            {product.name}
          </Box>
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography variant="body2">
            <Box component="span" fontSize="16px" mr={1} ml={2}>
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
            </Box>
            {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
          </Typography>
        </Grid>
        <Grid item xs={2} md={2}>
          <QuantityCartListForm onChange={handleAddToCart} ProductId={product.id} index={index} />
        </Grid>
        <Grid item xs={2} md={2}>
          <Box component="span" fontSize="16px" mr={1} ml={2}>
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}
          </Box>
        </Grid>
        <Grid item xs={2} md={2}>
          <DeleteForeverRoundedIcon onClick={handleRemove} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartIterm;
