import { Typography } from '@mui/material';
import categoryApi from 'api/categoryApi';
import React, { useEffect, useState } from 'react';
import { Box } from '../../../../../node_modules/@mui/material/index';
import { makeStyles } from '../../../../../node_modules/@mui/styles/index';
import CategorySkeletonList from './CategorySkeletonList';

const useStyles = makeStyles(() => ({
  root: {
    padding: '20px',
    userSelect: 'none',
  },
  menu: {
    padding: '0',
    margin: '0',
    '& > li': {
      marginTop: 1,
      listStyle: 'none',
      transition: 'all .25s',
      '&:hover': {
        color: 'rgb(162,49,176)',
        cursor: 'pointer',
      },
    },
  },
}));

function CategoryFilter({ onChange }) {
  const classes = useStyles();
  const [Loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await categoryApi.getAll();
        setCategoryList(
          data.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log('Failed to fetch category id: ', error);
      }
      setLoading(false);
    })();
  }, []);
  const handleCategoryClick = (category) => {
    if (onChange) onChange(category);
  };

  return (
    <Box className={classes.root}>
      <Typography pb={1}>DANH MỤC SẢN PHẨM</Typography>
      {Loading ? (
        <CategorySkeletonList length={categoryList.length} />
      ) : (
        <ul className={classes.menu}>
          {categoryList.map((category) => (
            <li key={category.id} onClick={() => handleCategoryClick(category)}>
              <Typography variant="body2">{category.name}</Typography>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
}

export default CategoryFilter;
