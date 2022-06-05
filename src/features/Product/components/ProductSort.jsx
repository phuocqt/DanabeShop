import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function ProductSort({ sort, onChange }) {
  const [value, setValue] = useState(sort);

  const handleChange = (event, value) => {
    setValue(value);
    onChange(value);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="salePrice:ASC" label="Giá tăng dần" />
        <Tab value="salePrice:DESC" label="Giá giảm dần" />
      </Tabs>
    </Box>
  );
}

export default ProductSort;
