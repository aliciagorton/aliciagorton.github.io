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
   
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    color: "white",
    fontSize: "30px",
  },
  body: {
    color: "#a7c3d1",
    fontSize: "18px",
    boxShadow: "none",
  },
}));

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }

export default function ListSkills() {
  const classes = useStyles();
//   const [dense, setDense] = React.useState(false);
//   const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            Techical SKills 
          </Typography>
          <Typography paragraph className={classes.body}>
            React   -   MongoDB    -   Express   -   Node   -     MySQL    -    Javascript     -    Css         HTML   -   Bootstrap   -   MaterialUI        
          </Typography>
    
            {/* <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <DoubleArrowIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List> */}
        </Grid>
      </Grid>
    </div>
  );
}