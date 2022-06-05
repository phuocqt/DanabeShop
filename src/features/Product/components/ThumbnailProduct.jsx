import React from 'react';
import PropTypes from 'prop-types';

import { STATIC_HOST } from 'constants/index';
import { THUMBNAIL_PLACEHOLDER } from 'constants/common';
import ReactImageMagnify from 'react-image-magnify';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

ThumbnailProduct.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles(() => ({
  smallImage: {
    paddingTop: 1,
    borderRadius: '4px',
  },
  active: {
    borderColor: 'primary',
  },
}));

function ThumbnailProduct({ product = {} }) {
  const classes = useStyles();
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  const handleClickImg = (e) => {
    const elementImg = e.target;
    if (elementImg.classList.contains('active')) {
      elementImg.classList.remove('active');
    } else {
      elementImg.classList.add('active');
    }
  };
  return (
    <Box>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: `${product.name}`,
            isFluidWidth: true,
            src: `${thumbnailUrl}`,
          },
          largeImage: {
            src: `${thumbnailUrl}`,
            width: 1200,
            height: 1800,
          },
        }}
      />
      <Box className={classes.smallImage && classes.active} onClick={handleClickImg}>
        <img src={thumbnailUrl} alt={product.name} width="20%" />
      </Box>
    </Box>
  );
}

export default ThumbnailProduct;
