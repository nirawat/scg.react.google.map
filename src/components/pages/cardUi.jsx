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
      {console.log(data.photos)}
      <CardMedia
        className={classes.media}
        image={
          data.photos !== null
            ? data.photos[0].photo_url
            : "https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/21686043_1063328787103327_4925957123734487127_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_eui2=AeFtQaSrK2Ss5mnOk29pFrqzVM14XsiQnf9UzXheyJCd_-uLb1xGkmukrg4ucrwkTgGI4LCfBdf86o6AWp-A7Jhc&_nc_ohc=0sekwABI-6MAX9vadoM&_nc_ht=scontent.fbkk22-2.fna&oh=c2e85584226ae98b1090bb44789dd631&oe=5F3EC210"
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
