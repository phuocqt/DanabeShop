import Pagination from '@mui/material/Pagination';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper } from '../../../../node_modules/@mui/material/index';
import { makeStyles } from '../../../../node_modules/@mui/styles/index';
import ProductList from '../components/Filters/ProductList';
import ProductSkeletonList from '../components/Filters/ProductSkeletonList';
import ProductSort from '../components/Filters/ProductSort';

ListPage.propTypes = {};
const useStyles = makeStyles({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
});

function ListPage(props) {
  const [productList, setProductList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 12,
    page: 1,
  });

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 12,
    _sort: 'salePrice:ASC',
  });

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filter);

        setLoading(false);
        setProductList(data.data);
        setPagination(pagination);
      } catch (error) {
        console.log('fail to fetch product list', error);
      }
    })();
  }, [filter]);
  function handlePageChange(e, page) {
    setFilter((prevFilter) => ({ ...prevFilter, _page: page }));
  }
  function handleSortChange(value) {
    setFilter((prevFilter) => ({ ...prevFilter, _sort: value }));
  }

  return (
    <div>
      <Box>
        <Container pt={100}>
          <Grid container spacing={1}>
            <Grid className={classes.left}>
              <Paper elevation={1}>left</Paper>
            </Grid>
            <Grid className={classes.right}>
              {' '}
              <Paper elevation={0}>
                <ProductSort sort={filter._sort} onchange={handleSortChange} />
                {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                <Box pt={2} pb={3}>
                  <Pagination
                    count={Math.ceil(pagination.total / pagination.limit)}
                    page={pagination.page}
                    onChange={handlePageChange}
                    color="primary"
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
