import React from 'react';
import PropTypes from 'prop-types';

import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

ProductDetail.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles({
  root: {
    paddingBottom: 2,
    borderBottom: `1px solid grey`,
  },

  shortDescription: {
    margin: 2,
  },

  priceBox: {
    backgroundColor: 'rgb(204,204,204,0.2)',
    padding: 2,
  },

  salePrice: {
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },

  originalPrice: {
    marginRight: 2,
    textDecoration: 'line-through',
  },
});
function ProductDetail({ product = {} }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  console.log(product);
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.shortDescription}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(originalPrice)}
            </Box>
            <Box component="span" className={classes.promotionPercent}>
              {`-${promotionPercent}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductDetail;
