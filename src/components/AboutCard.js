import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';import Divider from '@material-ui/core/Divider';
// import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Skills from './Skills.js';
import EducationCard from './EducationCard';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "2rem",
    fontSize: "20px",
    background: "#082738",
    boxShadow: "none", 
  },
  aboutTitle: {
    fontSize: "80px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
  cardContent: {
    background: "#a7c3d1", 
  },
  paragraph: {
    fontSize: "20px",
    color: "#3b454a",
    padding: "0.5rem 6rem",
  },
  // skillsBox: {
  //   fontSize: "20px",
  //   fontWeight: "bold",
  //   color: "#074563",
  //   background: "#a7c3d1",
  // },
  iconBTN: { 
    textAlign: "right",
    fontSize: "40px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

}));

export default function AboutCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography component="h3" variant="h3" className={classes.aboutTitle}>
          <div className={classes.iconBTN}>
              <IconButton 
                  href="https://www.linkedin.com/in/alicia-gorton/" 
                  target="_blank"
                  className={classes.iconBTN}
                 
                  icon={<LinkedInIcon/>} aria-label="github">
                  <LinkedInIcon />
              </IconButton>
              <IconButton           
                  href="https://github.com/aliciagorton" 
                  target="_blank"
                  className={classes.iconBTN}

                  icon={<GitHubIcon/>}aria-label="LinkedIn">
                  <GitHubIcon />          
              </IconButton>
          </div>
          <div className={classes.avatar}>
          About Me 
          {/* <Avatar alt="Alicia Gorton" align="Right" src={img} className={classes.large} />  */}
          </div> 
        </Typography>
        <Typography paragraph variant="body1" color="textSecondary" component="p" className={classes.paragraph}>
        Hello! My name is Alicia Gorton and I am a full-stack web developer. Presently, I am a MERN (Mongo / Express / React / Node) web developer who wants to make a difference. I am excited to merge my experience in healthcare and software development. I am experienced and comfortable with working in fast paced and high stress environments with a focus on prioritizing tasks, streamlining projects, and devoting attention to detail. I am confident in my abilities to work with a wide range of people with diverse backgrounds, quickly digesting technical information and articulating it for a wide range of audiences, and rising to meet difficult challenges.
        </Typography>
        <Typography paragraph variant="body2" color="textSecondary" component="p" className={classes.paragraph}>
        I entered the professional world as a Licensed Practical Nurse, proud and humbled by my profession. Nursing was an incredible experience where I found a passion working with people. My patients were the most amazing part about nursing, but I found myself yearning to return to school and learn more about human behavior. 
        </Typography>
        <Typography paragraph variant="body3" color="textSecondary" component="p" className={classes.paragraph}>
        In 2014, I applied to the psychology program at the University of Illinois Urbana Champaign (UIUC). As a student interested in research, I joined a Language Acquisition Lab and worked with child research participants. During my time, I was exposed to data analytics and learned how to develop experiments using computational modeling.
        </Typography>
        <Typography paragraph variant="body2" color="textSecondary" component="p" className={classes.paragraph}>
        After graduation, I began working in Applied Behavioral Analysis (ABA) therapy with children diagnosed with Autism. ABA was able to merge my favorite parts of nursing with data. I had the opportunity to make a difference in a child’s life while also working with data analysis to mark the changes and success throughout therapy. 
        </Typography>
        <Typography paragraph variant="body2" color="textSecondary" component="p" className={classes.paragraph}>
        In March of 2020, due to the pandemic, my assigned school’s therapy services were stopped indefinitely. I took the opportunity to learn more about software development for the web and enrolled in a programming bootcamp taught by the University of California in Davis. My goal is to merge all of my past experiences with my new skillset to create digital tools and experiences that can be used to do what brings me the most joy: helping people.
        </Typography>
{/* 
        <CardActions>
            <IconButton 
                href="https://www.linkedin.com/in/alicia-gorton/" 
                target="_blank"
                className={classes.iconBTN}
               
                icon={<LinkedInIcon/>}aria-label="github">
                <LinkedInIcon />
            </IconButton>
            <IconButton           
                href="https://github.com/aliciagorton" 
                target="_blank"
                className={classes.iconBTN}
                
                icon={<GitHubIcon/>}aria-label="LinkedIn">
                <GitHubIcon />          
            </IconButton>
        </CardActions> */}
        <div>
          <Skills />
          <EducationCard />
        </div>
      </CardContent>
    </Card>
  );
}
