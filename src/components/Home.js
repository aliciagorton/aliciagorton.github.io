import React from 'react';
import Typed from 'react-typed';
import { Typography, Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailButton from './MailBTN';
// import Footer from './Footer';
// import Accordion from './Accordions';
import Resume from './ResumeBTN.js';


//Styling
const useStyles = makeStyles({
    rootHome: {
        fontSize: "20px",
        background: "#082738",
        margin:"3rem",
        padding:"6rem",
    },
    mainCard: {
        background: "#082738",
        textAlign: "center",
        boxShadow: "none",
        padding: "1rem", 
        marginTop: "40px",
        marginBottom: "100px",

    },
    title: {
        color:  "#a7c3d1",
        fontSize: "30px",
        
    },
    name: {
        color: "White",
        fontSize: "100px",
    },

    cardDes: {
        background: "#082738",
        color: "#082738",        
        boxShadow: "none", 
        padding: "4rem",

    },
    desc: {
        fontSize: "30px",
        color: "#a7c3d1",
        padding: "2rem",
        textAlign: "left",
    },
    BTN: {
        // background: "#082738",
        color: "#082738",        
     
    },

});

const Home = () => {
    const classes = useStyles();
    return (
        <div
            id="home" 
            className={classes.rootHome}
        >
            <Card className={classes.mainCard}>
                <Typography className={classes.title}>
                    <Typed className={classes.title} variant="h5"
                    strings={["Hello my name is"]}
                    typeSpeed={140}
                    // backSpeed={2}
                    // loop
                    />
                </Typography>
                <Typography >
                    <Typed className={classes.name} variant="h1"
                    strings={["Alicia Gorton"]} 
                    typeSpeed={200}/>
                </Typography>
                <Card className={classes.cardDes}>
                    <Typography className={classes.desc} >
                        I'm a full-stack web developer based in Sacramento, CA that enjoys crafting websites, applications, and everything in between. I am looking for opportunities of growth in the fields of emerging technology and data science.
                    </Typography>
                    <Grid 
                        container 
                        direction="row"
                        justify="center"
                        className={classes.BTN}>
                        <MailButton /> 
                        <Resume />
                    </Grid>
                   
                </Card>
            </Card>
        </div>
     
    );
};

export default Home;