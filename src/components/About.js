import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Grid }  from '@material-ui/core';
import AboutCard from './AboutCard';

const useStyles = makeStyles({
    root: {
        justifyContent: "center",
        background: "#082738", 
        boxShadow: "none",
        margin: "3rem",
        padding: "4rem",

      },
    AboutContainer: {
        // marginTop: "40px",
        // marginBottom: "40px",
        borderStyle: "none",
        boxShadow: "none",
    },
});

function About() {

    const classes = useStyles();

    return (
        <div 
            id="about"
            // container 
            // item 
            // xs={12}
            className={classes.root}
        >
            <Grid 
                container 
                spacing={2} 
                direction="row" 
                justify="space-evenly" 
                className={classes.AboutContainer}
            >           
                 
                <div 
                    // container 
                    // item 
                    // xs={12} 
                    // sm={10} 
                    // md={8}
                >
                    <AboutCard />      
                </div> 
                {/* <Footer />  */}
            </Grid> 
        </div>   
    );
}



export default About;