import { Box, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',

    listStyleType: 'none',
    texDecoration: 'none',

    '&>li': {
      paddingLeft: '20px',
    },
    '&>li>a': {
      color: 'rgb(32,32,32)',

      texDecoration: 'none',
    },
    '&>li>a.activeDes': {
      color: '#1976D2',
    },
    '&>li>a.activeRev': {
      color: '#1976D2',
    },
  },
});

function ProductMenu(props) {
  let params = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [activeDes, setActiveDes] = useState(true);

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link
          underline="none"
          onClick={() => {
            activeDes ? setActiveDes(false) : setActiveDes(true);
            navigate('/products/' + params.productId);
          }}
          className={activeDes ? 'activeDes' : null}
        >
          Description
        </Link>
      </li>
      <li>
        <Link
          underline="none"
          onClick={() => {
            activeDes ? setActiveDes(false) : setActiveDes(true);
            navigate('/products/' + params.productId + '/reviews');
          }}
          className={!activeDes ? 'activeDes' : null}
        >
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
