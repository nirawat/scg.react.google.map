import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  media: {
    height: 0,
    paddingTop: "40%", // 16:9
  },
}));

const CardUi = (props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="icon" src={data.icon} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name}
        subheader={data.business_status}
      />
      <CardMedia
        className={classes.media}
        image={
          data.photos !== null
            ? data.photos[0].photo_url
            : `${process.env.PUBLIC_URL + "/none.png"}`
        }
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="caption">{data.formatted_address}</Typography>
      </CardContent>
    </Card>
  );
};

CardUi.propTypes = {
  data: PropTypes.any.isRequired,
};

export default CardUi;
