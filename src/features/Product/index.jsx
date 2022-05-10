import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';

import { Box } from '../../../node_modules/@mui/material/index';
import ListPage from './Pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route path="" element={<ListPage />} />
      </Routes>
    </Box>
  );
}

export default ProductFeature;
