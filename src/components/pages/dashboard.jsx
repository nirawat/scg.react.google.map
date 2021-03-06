import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import SearchBar from "./searchBar";
import CardUi from "./cardUi";
import * as serviceGoogleMap from "../../services/business/google.map.service";
import {
  TYPE_GOOGLE_MAP,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  REQUEST,
} from "../../redux/reducers/global.action.type";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const uniqid = require("uniqid");
  const defaultKey = "Bang Sue";
  const [searchGoogleMap, setSearchGoogleMap] = React.useState({
    Key1: "restaurants",
    Key2: "Bangkok",
  });
  const isLoading = useSelector((state) => state.reducerGoogleMap.isLoading);
  const googleMapData = useSelector((state) => state.reducerGoogleMap.data);
  const skeleton = ["h1", "h3", "body1", "caption", "caption", "caption"];

  function asyncData(searchKey) {
    (async () => {
      dispatch({
        type: TYPE_GOOGLE_MAP,
        handle: REQUEST,
        payload: [],
      });
      dispatch({
        type: TYPE_GOOGLE_MAP,
        handle: SET_LOADING_TRUE,
      });
      let resp = await serviceGoogleMap.Request(
        searchGoogleMap.Key1,
        searchKey !== '' ? searchKey : defaultKey,
        searchGoogleMap.Key2
      );
      if (resp.status === 200) {
        dispatch({
          type: TYPE_GOOGLE_MAP,
          handle: REQUEST,
          payload: resp.data,
        });
        dispatch({
          type: TYPE_GOOGLE_MAP,
          handle: SET_LOADING_FALSE,
        });
      }
    })();
  }

  useEffect(
    () => {
      asyncData(defaultKey);
    },
    // eslint-disable-next-line
    [defaultKey]
  );

  const handleSearchKeyEvent = (keySearch) => {
    asyncData(keySearch);
  };

  return (
    <div className="container">
      <SearchBar
        defaultValue={defaultKey}
        handleSearchKey={handleSearchKeyEvent}
      />
      <Toolbar />
      {isLoading ? (
        skeleton.map((variant, index) => (
          <Typography component="div" key={index.toString()} variant={variant}>
            <Skeleton key={index.toString()} />
          </Typography>
        ))
      ) : (
        <>
          <Container>
            <Grid item xs={12}>
              <Grid
                container
                className={classes.root}
                justify="center"
                spacing={2}
              >
                {googleMapData.map((item, i) => {
                  return (
                    <Grid key={uniqid + i} item>
                      <Paper>
                        <CardUi data={item} />
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};
