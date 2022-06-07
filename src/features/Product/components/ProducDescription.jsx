import { Paper } from '@mui/material';
import React from 'react';

function ProducDescription({ product = {} }) {
  return (
    <Paper elevation={0} sx={{ padding: '30px' }}>
      <div dangerouslySetInnerHTML={{ __html: product.description }}></div>;
    </Paper>
  );
}

export default ProducDescription;
