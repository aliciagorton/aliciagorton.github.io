import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    background: "#3b454a",
    textAlign: "center",
    boxShadow: "none",
    padding: 25,
   
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    color: "white",
    fontSize: "45px",
  },
  body: {
    color: "#a7c3d1",
    fontSize: "20px",
    boxShadow: "none",
    textAlign: "left",
    padding: "0.5rem 6rem",
  },

}));

export default function ListSkills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            Techical SKills 
          </Typography>
          <Typography paragraph className={classes.body}>
          Languages: Javascript, jQuery, HTML5, Cascading Style Sheets (CSS), Handlebars
          </Typography>
        <Typography paragraph component="p" className={classes.body}>
          Libraries / Tools: Node.js, MongoDB, Express, MySQL, NoSQL, Git, GitHub, React.js, React, API’s, Caches, Cookies, Local Storage, Responsive Design, SASS, Bootstrap, User Authentication, Material UI, Security and Session Storage 
          </Typography>
        <Typography paragraph component="p" className={classes.body}>
          Competencies/Other: Heroku, Webpack, Data Structures, Data Analysis, Data Science, Algorithms, Microsoft Office, Microsoft Excel, Microsoft Powerpoint
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}