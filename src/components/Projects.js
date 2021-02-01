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
// import project1 from './images/comingsoon.jpeg';
import project2 from './images/Kuma.png';
import project3 from './images/chuck.png';
import project4 from './images/burger.png';
import project1 from './images/Leet.jpg'
// import { MailRounded } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: "center",
        background: "#082738", 
        boxShadow: "none",
        margin: "3rem",
        padding: "4rem",
        
    },
    mainCard: {
        marginTop: "30px",
        background: "#a7c3d1",
        textAlign: "center",
        padding: "2em",
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
            
                        <div className={classes.gridLayout}>
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
                                        Leet is a web application where the user creates a profile, from there they can auto-populate PDF’s. Leet offers already templated PDF’s or the ability for a user to  upload their own. 
                                        <br />
                                        <ul>
                                            <li>Led a team of 4 to design, develop, and debug, and deploy our web application.</li>
                                            <li>Maintained gitflow workflow for application, reviewed all pull requests from team to ensure code quality and consistency. </li>
                                            <li>Developed user credentials, authorization through passport, and deployed the web application to Heroku.</li>
                                            <li>Front End developer using React, designed user interface, page layouts and components, used redux, and react hooks.</li>
                                            <li>Built using React.js, Passport, Express, Node.js, MongoDBs, Material UI, third-party APIs, and JavaScript.</li>
                                        </ul>
                                        </Typography>
                                    </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Button size="small" className={classes.button} href="https://github.com/aliciagorton" target="_blank">
                                    Repository
                                    </Button>
                                    <Button size="small" className={classes.button} href="https://leet-pdf.herokuapp.com/" target="_blank">
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
                                   Kuma is a web application that allows people to create profiles for their pets and compare traits with other members' pets to find playdates for them while also meeting new people with similar interests.
                                    <br />
                                    <ul>
                                        <li>Collaborated with a team of 3 developers for all phases of the development life cycle, focusing on coding, testing, and debugging.</li>
                                        <li>Using Agile methodologies and participated in weekly SCRUM meetings remotely using Zoom.  </li>
                                        <li>Developed user credentials, web sessions and relational databases. </li>
                                        <li>Front End developer - designed user interface, page layouts and page designs. </li>
                                        <li>Built using Sequelize, Passport, Express, Node.js, Handlebars, MySQL, Bootstrap, and JavaScript.</li>
                                    </ul>
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
                    
                
                        <div>
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
                                   Chuck Norris “Fan Page” with retro throwback twist, reminiscent of early web experiences and design. 
                                    <br />
                                    <ul>
                                        <li> Norris “Fan Page” with retro throwback twist, reminiscent of early web experiences and design. 
                                        Worked with a team of 3 to develop,  debug merging conflicts, and deployment with Git. 
                                        </li>
                                        <li>Remotely organized with weekly SCRUM meetings using  Slack and Zoom.  </li>
                                        <li>Developed using DOM, fetch requests with APIs and creating event listeners to respond to user interactivity. </li>
                                        <li>Contribution focused on javascript, writing functions, creating responsive events and utilizing API’s. </li>
                                        <li>Built using two server-side APIs, a third-party API, Javascript, and Bulma.</li>
                                    </ul>
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
                        
                        <div>
                            {/* <Card className={classes.cardContainer}>
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
                            </Card> */}
                        </div>         
                    </Grid>                     
                </Card>
            </Card>
        </div>
    );
}

export default Projects;

