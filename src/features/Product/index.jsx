import React from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '../../../node_modules/@mui/material/index';
import DetailPage from './Pages/DetailPage';
import ListPage from './Pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const location = useLocation();

  // const productID = location.

  return (
    <Box pt={4}>
      <Outlet />
    </Box>
  );
}

export default ProductFeature;
