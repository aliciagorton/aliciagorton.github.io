import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: "#082738",
    backgroundColor: "#082738",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
   
  },
  BTN: {
    color: "white",
    background:"#082738",
    marginTop: "1rem",
  },
  paper: {
    backgroundColor: "#082738",
    borderRight: "none",
  },
  drawer: {
    backgroundColor: "#082738",
  },
}));

export default function MiniDrawer() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.paper,
        }}
        variant="permanent"
      >
        <List 
          className={ classes.BTN}
        >
          {[['Home', '#home'], ['About', '#about'], ['Projects', '#projects'], ['Experience', '#experience']].map(
            (nav_item, index) => (
              <ListItem key={nav_item[0]} button component={Link} to={nav_item[1]}>
                <ListItemText primary={nav_item[0]} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Home />
        <About />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}