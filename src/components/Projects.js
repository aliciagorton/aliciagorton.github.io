import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import {
    Grid, 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';

//Project Images
import project1 from './static/comingsoon.jpeg';
import project2 from './static/Kuma.png';
import project3 from './static/chuck.png';
import project4 from './static/burger.png';
// import { MailRounded } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: "20px",
        background: "#082738",
        boxShadow: "none", 
    },
    mainCard: {
        marginTop: "40px",
        background: "#a7c3d1",
        textAlign: "center",
        padding: "4em",
    },
    cardContainer: {
        margin: "40px 100px 60px 100px",
        maxWidth: 450,
        boxShadow: "0 19px 38px rgba(0,0,0,0.40), 0 15px 12px rgba(0,0,0,0.30)",
        background: "#3b454a",
    },
    projectsTitle: {
        fontSize: "80px",
        fontWeight: "bold",
        color: "white", 
        textAlign: "center",
        textTransform: "uppercase",
        padding: "3rem 20rem"
      
    },
    summary: {
        height: "475px",
        background: "#3b454a",
        margin: "2px",
        color: "#a7c3d1",
        fontSize: "18px",
        textAlign: "left",
    },
    subHeading: {
        color: "white", 
        fontWeight: "bold"
    },
    button: {
        background:"#082738", 
        color: "white",
        margin: "8px 20px 8px 50px",
        fontSize: "15px",
    },
}))

const Projects = () => {

    const classes = useStyles();

    return(
        <div 
            id="projects"
        >
            <Card className={classes.root}>
                <Card className={classes.mainCard}>
                    <Typography className={classes.projectsTitle}>
                        Projects
                    </Typography>
                    <Grid item xs={12} sm={12} md={12} container justify="center" >
            
                        <div 
                            // item 
                            // xs={12} 
                            // sm={8} 
                            // md={6} 
                            className={classes.gridLayout}
                        >
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia 
                                        component="img" 
                                        alt="Project 1" 
                                        height="225" 
                                        image={project1}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" className={classes.subheading}>
                                        Leet
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                                        This will be the final project that is required by the full-stack program. ~ Coming Soon ~
                                        </Typography>
                                    </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Button size="small" className={classes.button} href="https://github.com/aliciagorton" target="_blank">
                                    Repository
                                    </Button>
                                    <Button size="small" className={classes.button} href="" target="_blank">
                                    Deployed 
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia 
                                    component="img" 
                                    alt="Project 2" 
                                    height="225" 
                                    image={project2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" className={classes.subheading}>
                                        Kuma
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        // color="black" 
                                        color="primary" 
                                        component="p" 
                                        className={classes.summary}
                                    >
                                    The second collaborative project from bootcamp. Kuma is an application that allows the user to create a profile for their dog in order to share and compare their pets traits in order to find man’s best friend and their own best friend.
                                    <br />
                                    <br />
                                    My role was primarily front-end and design. I enjoyed learning more about bootstrap and implementing new UI designs. My primary challenge with this project was understanding sessions and how foreign keys are assigned.
                                    <br />
                                    <br />
                                    Sequelize -  Passport - Express - Node.js - Handlebars - MySQL - Javascript - Bootstrap - CSS - HTML
                                    
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button size="small" className={classes.button} href="https://github.com/aliciagorton/Project_Two.git" target="_blank">
                                Repository
                                </Button>
                                <Button size="small" className={classes.button} href="https://peaceful-citadel-03664.herokuapp.com/" target="_blank">
                                Deployed
                                </Button>
                            </CardActions>
                    
                        </div>
                    
                
                        <div 
                            // item 
                            // xs={12} 
                            // sm={8} 
                            // md={6}
                        >
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia 
                                        component="img" 
                                        alt="Project 3" 
                                        height="225" 
                                        image={project3}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" className={classes.subheading}>
                                    Chuck Norris Fan Page
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                                    The first collaborative project. We went into this project wanting to thoroughly enjoy this project. Our assignment was to use two server-side APIs, a third-party API, make it interactive, and have a polished UI design.
                                    <br />
                                    <br />
                                    My role in this project was to make our APIs functional, along with the buttons functional with JavaScript. The biggest challenge in this project was understanding the DOM and working with the APIs.
                                    <br />
                                    <br />
                                    Javascript - CSS - Bulma- HTML 
                                    
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" className={classes.button} href="https://github.com/aliciagorton/Project_One.git" target="_blank">
                                    Repository
                                    </Button>
                                    <Button size="small" className={classes.button} href="https://the-magic-dragon.github.io/The-Magic-D-Project-/" target="_blank">
                                    Deployed
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        
                        <div 
                            // item 
                            // xs={12} 
                            // sm={8} 
                            // md={6}
                        >
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia 
                                        component="img" 
                                        alt="Project 4" 
                                        height="225" 
                                        image={project4}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" className={classes.subheading}>
                                    Workout Tracker
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                                    This assignment involved creating a Mongo database with a Mongoose schema. Using routes with Express, user is able to create, track and view daily workouts. User is able to log multiple exercises on any given day. A user will be able to reach their fitness goals more quickly with this app. 
                                    <br />
                                    <br />
                                    MongoDB - Express - Node.js - JavaScript
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" className={classes.button} href="https://github.com/aliciagorton/17-NoSQL-Workout-Tracker.git" target="_blank">
                                    Repository
                                    </Button>
                                    <Button size="small" className={classes.button} href="https://blooming-ridge-23540.herokuapp.com/" target="_blank">
                                    Deployed
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>         
                    </Grid>                     
                </Card>
            </Card>
        </div>
    );
}

export default Projects;

