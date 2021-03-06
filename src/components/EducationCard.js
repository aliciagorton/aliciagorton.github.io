import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { AppBar, CardContent } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    backgroundColor: "#3b454a", 
    boxShadow: "none",
    padding: "1rem",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    color: "white",
  },
  mainContainer: {
    background: "#a7c3d1", 
    color: "#0f9994",
    fontSize: "30px",
    boxShadow: "none",
  },
  subHeading: {
    background: "#a7c3d1",
    color:  "white",
    fontSize: "50px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subContainer: {
    background: "#a7c3d1", 
    fontSize: "45px",
    color: "#3b454a",
    justifyItems: "center",
  },
  SwipeableViews:{
    color: "white",
    fontSize: "25px",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Education() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };
 

  return (
    <Card>
      <CardContent className={classes.mainContainer}>
        <Grid container item xs={12} direction="row" justify="space-evenly">
          <p className={classes.subHeading}>Education</p>
        </Grid>
        
        <Grid 
          container item xs={6} sm={12} 
          direction="row" 
          justify="center"
          alignItems="center"
        >
          <AppBar 
            className={classes.root}
            position="static" 
            xs={6}
            style={{width: "auto"}}
          >
            <Tabs
              className={classes.tabs}
              value={value}
              onChange={handleChange}
            >
              <Tab 
                className={classes.tab}
                label="Full-Stak Web Devleopment Bootcamp Certificate" 
                {...a11yProps(0)} 
              />
              <Tab 
                className={classes.tab}
                label="Bachelor of Science in Psychology" 
                {...a11yProps(1)} 
              />
              <Tab 
                className={classes.tab}
                label="Licensed Practical Nurse" 
                {...a11yProps(2)} 
              />
            </Tabs>
          </AppBar>
        </Grid>
        <Grid 
          container 
          direction="row" 
          justify="center"
          alignItems="center"
          style={{marginBottom: "100px"}}
        >
          <TabPanel 
            value={value} 
            index={0} 
            dir={theme.direction}
          >
            <span style={{color: "#3b454a"}}>
              University of California at Davis<br/>
              Davis, CA<br/>
              June 2020 to December 2020 
            </span>
          </TabPanel>
          
          <TabPanel 
            value={value} 
            index={1} 
            dir={theme.direction}
          >
            <span style={{color: "#3b454a",}}>
              University of Illinois at Urbana Champaign<br/>
              Urbana, IL<br/>
              August 2014 to May 2017
            </span>
          </TabPanel>
          
          <TabPanel 
            value={value} 
            index={2} 
            dir={theme.direction}
          >
            <span style={{color: "#3b454a"}}>
              Parkland College<br/>
              Champaign, IL<br/>
              January 2011 to May 2012
            </span>
          </TabPanel>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default Education;