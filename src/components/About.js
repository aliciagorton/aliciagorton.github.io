import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Grid }  from '@material-ui/core';
// import Img from './static/images/img.jpeg';
// import Skills from './Skills';
import Education from './Education';
import Footer from './Footer';
import AboutCard from './AboutCard';



const useStyles = makeStyles({
    root: {
        justifyContent: "center",
        background: "#082738", 
        boxShadow: "none",
      },
    imgContainer: {
        marginTop: "40px",
        marginBottom: "40px",
        paddingLeft: "200px",
        paddingTop:"40px",
        borderStyle: "none",
        boxShadow: "none",
    },
    heading: {
        color: "#0f9994", 
        fontWeight: "bold",
        fontSize: "60px",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "#8fc7e3",
        padding: "0",
    },
    img: {
        display: "flex",
        height: 85,
        width: 85,
        // paddingLeft: "50px",
        borderRadius: "50%",
        justifyContent: "center",
        marginLeft: "100px",
    },

    aboutMe: {
        justifyContent: "center",
        textAlign: "center",
        marginBottom: "50px",
    },
    Footer: {
        justifyContent: "center",
        textAlign: "center",
        marginBottom: "50px",
    }
});

function About() {

    const classes = useStyles();

    return (
        <Grid container item xs={12} sm={12} className={classes.root}>
            <Grid container spacing={2} direction="row" justify="space-evenly" className={classes.imgContainer}>           
            </Grid>      
            <Grid container item xs={12} sm={9}>
                <AboutCard />
                <Grid container item xs={12} sm={12} className={classes.Education}>
                    <Education /> 
                </Grid>         
            </Grid> 
            <Grid container item xs={12} sm={12} className={classes.Footer}>
                <Footer />  
             </Grid>
        </Grid>   
    );
}



export default About;