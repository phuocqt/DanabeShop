import Pagination from '@mui/material/Pagination';
import productApi from 'api/productApi';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Paper } from '../../../../node_modules/@mui/material/index';
import { makeStyles } from '../../../../node_modules/@mui/styles/index';
import FiltersViewer from '../components/Filters/FiltersViewer';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import queryString from 'query-string';
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
  let location = useLocation();

  let navigate = useNavigate();
  const queryParam = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 12,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);

  const [productList, setProductList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(() => ({
    limit: 12,
    total: 12,
    page: 1,
  }));

  const [filter, setFilter] = useState(() => ({
    ...queryParam,
    _limit: Number.parseInt(queryParam._limit) || 12,
    _page: Number.parseInt(queryParam._page) || 1,

    _sort: queryParam._sort || 'salePrice:ASC',
  }));

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParam);

        setLoading(false);
        setProductList(data.data);
        setPagination(pagination);
      } catch (error) {
        console.log('fail to fetch product list', error);
      }
    })();
  }, [queryParam]);
  // useEffect(() => {
  //   let qrString = queryString.stringify(filter);
  //   navigate('?' + qrString);
  // }, [filter]);
  function handlePageChange(e, page) {
    const filter = {
      ...queryParam,
      _page: page,
    };
    let qrString = queryString.stringify(filter);
    navigate('?' + qrString);
  }
  function handleSortChange(value) {
    const filter = {
      ...queryParam,
      _sort: value,
    };
    let qrString = queryString.stringify(filter);
    navigate('?' + qrString);
  }
  const handleFilterChange = (newFilters) => {
    const filter = {
      ...queryParam,
      ...newFilters,
    };
    let qrString = queryString.stringify(filter);
    navigate('?' + qrString);
  };
  const handleChange = (newFilters) => {
    let qrString = queryString.stringify(newFilters);
    navigate('?' + qrString);
  };
  return (
    <div>
      <Box>
        <Container pt={100}>
          <Grid container spacing={1}>
            <Grid className={classes.left}>
              <Paper elevation={1}>
                <ProductFilter onChange={handleFilterChange} filter={queryParam} />
              </Paper>
            </Grid>
            <Grid className={classes.right}>
              {' '}
              <Paper elevation={0}>
                <ProductSort sort={queryParam._sort} onChange={handleSortChange} />
                <FiltersViewer filters={queryParam} onChange={handleChange} />
                {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                <Box pt={2} pb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
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
