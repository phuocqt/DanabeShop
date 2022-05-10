import Pagination from '@mui/material/Pagination';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper } from '../../../../node_modules/@mui/material/index';
import { makeStyles } from '../../../../node_modules/@mui/styles/index';
import ProductList from '../components/Filters/ProductList';
import ProductSkeletonList from '../components/Filters/ProductSkeletonList';

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

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll({ _page: 1, _limit: 12 });

        setLoading(false);
        setProductList(data.data);
        console.log(pagination);
      } catch (error) {
        console.log('fail to fetch product list', error);
      }
    })();
  }, []);

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
                {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                <Box pt={2} pb={3}>
                  <Pagination count={10} page={10} color="primary" />
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
