import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Grid }  from '@material-ui/core';
// import Img from './static/images/img.jpeg';
// import Skills from './Skills';
import EducationCard from './EducationCard';
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
        <Grid container item xs={12}
        className={classes.root}>
            <Grid container spacing={2} direction="row" justify="space-evenly" className={classes.imgContainer}>           
            </Grid>      
            <Grid container item xs={12} sm={10}>
                <AboutCard />      
            </Grid> 
            <Grid container item xs={12} sm={10}>
                <EducationCard /> 
            </Grid>  
            <Footer /> 
        </Grid>   
    );
}



export default About;