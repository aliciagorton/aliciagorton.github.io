import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Skills from './Skills.js';

// 
import img from './static/img.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem",
    fontSize: "20px",
    background: "#082738",
    boxShadow: "none", 
  },
//   expand: {
//     justifyContent:"left",
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
  AboutMe: {
    fontSize: "80px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // padding: "1rem",
    textTransform: "uppercase",
  },
  cardContent: {
    padding: "rem",
    background: "#a7c3d1",
   
  },
  paragraph: {
    fontSize: "20px",
    color: "#3b454a",
    padding: "1rem",
   
  },
//   skills: {
//     fontSize: "20px",
//     fontWeight: "bold",
//     color: "#074563",
//     padding: "1rem",
//     textAlign: "right",
   
//   },
  

}));

export default function AboutCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography component="h3" variant="h3" className={classes.AboutMe}>
            <Avatar alt="Alicia Gorton" align="Right" src={img} className={classes.img} /> 
            About Me 
        </Typography>
        <Typography paragraph variant="body2" color="textSecondary" component="p" className={classes.paragraph}>
        A recent graduate of a Full Stack Web Developer bootcamp taught by UC Davis, with a MERN focus.Passionate ​to merge professional background in healthcare with technology.Adept communicator, organizer, and problem solver.Confident in ability to utilize learned skills and ability to strengthen any team.
        </Typography>
        <Typography paragraph variant="body2" color="textSecondary" component="p" className={classes.paragraph}>
        Expert in customer service and client satisfaction.Trained at prioritizing tasks, being efficient with time and dealing in high stress environments.Previously a nurse and behavioral technician specializing in children who have Autism.Those experiences have enabled a strong sense of self and what others may need but can’t always articulate.Aim to build better software experiences, driven to make a difference, motivated to work as part of a team to diagnose and solve complex problems.
        </Typography>
        <CardActions>
            <IconButton 
                href="https://www.linkedin.com/in/alicia-gorton/" 
                target="_blank"
                className={classes.iconBTN}
                style={{padding: 4}}
                icon={<LinkedInIcon/>}aria-label="github">
                <LinkedInIcon />
            </IconButton>
            <IconButton           
                href="https://github.com/aliciagorton" 
                target="_blank"
                className={classes.iconBTN}
                style={{padding: 4}}
                icon={<GitHubIcon/>}aria-label="LinkedIn">
                <GitHubIcon />          
            </IconButton>
        </CardActions>

        <Divider variant="middle" />

        <Card>
            <Skills />
        </Card>
      </CardContent>
    </Card>
  );
}
