import React from 'react';
import Typed from 'react-typed';
import { Typography, Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailButton from './Button';
// import Footer from './Footer';
// import Accordion from './Accordions';


//Styling
const useStyles = makeStyles({
    root: {
        fontSize: "20px",
        background: "#082738",
        boxShadow: "none", 
        // padding: "10rem",
    },
    mainCard: {
        // padding: "3rem",
        background: "#a7c3d1",
        textAlign: "center",
    },
    title: {
        color: "White",
        fontSize: "20px",
        
    },
    name: {
        color: "White",
        fontSize: "100px",
    },

    descContainer: {
        marginBottom: "3rem", 
    },

    desc: {
        fontSize: "20px",
        color: "#0f9994",
        paddingLeft: "120px",
        paddingRight: "120px",

    },
});

const Home = () => {
    const classes = useStyles();
    return (
        <div
            id="home" 
            className={classes.root}
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
                <Typography className={classes.desc} >
                    I'm a full-stack web developer based in Sacramento, CA that enjoys crafting websites, applications, and everything in between. I am looking for opportunities of growth in the fields of emerging technology and data science.
                </Typography>
                <MailButton /> 
            
            </Card>
        </div>
     
    );
};

export default Home;