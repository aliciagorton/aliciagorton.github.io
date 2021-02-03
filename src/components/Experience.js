import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Button} from '@material-ui/core';
import resume from './images/AliciaGorton.pdf';
import Card from '@material-ui/core/Card';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: "center",
        background: "#082738", 
        boxShadow: "none",
        margin: "3rem",
        padding: "4rem",
      
    },
    mainContainer: {
        marginTop: "30px",
        background: "#a7c3d1",
        // padding: "2rem",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid white",
            right: "40px",
            top:0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem:{
        padding: "1rem",
        borderBottom: "2px solid #0277bd",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
            background: "rgba(60, 60, 60, 0.5)"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#0277bd #0277bd transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#0277bd"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #0277bd #0277bd"
            }
        }
    },
    timeLineYear :{
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#3b454a",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "White", 
        fontWeight: "bold",
        fontSize: "80px",
        padding: "3rem 0",
    },
    subHeading: {
        color: "#3b454a",
        padding: "0",
    },
    button: {
        background: "#3b454a",
        color: "white",

        "&:hover": {
            background: "#01579b"
        },
        justifyContent: "center",
        margin: "20px",
        padding: "10px"
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
}));

const Experience = () => {

    const classes = useStyles();

    return(
        <div 
            id="experience"
        >
            <Box className={classes.root}>
                <Card component="header" className={classes.mainContainer}>
                    <Typography variant="h4" align="center" className={classes.heading}> 
                    Experience
                    </Typography>
                <Box variant="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        October 2019 - September 2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                        Registered Behavioral Technician (RBT)
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Maxium Health Services
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Sacramento, CA 
                        </Typography>
                        <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                        Worked in multiple environments to provide ABA therapy; including homes and in schools. Interpreted and analyzed data to develop strategies for the best care possible and fostered strong relationships with families involved. 
                        <br></br>
                       <ul>
                           <li>Recommended by direct supervisor to apply for promotions within the company. Finalist in process when pandemic eliminated the role.</li>
                           <li>Accomplished high goal achievements by meeting industry standard of 80% or higher over consecutive therapy sessions for every new goal. </li>
                           <li>Collaborated with a team of 3-4 to develop, plan, and implement child’s goals.</li>
                           <li>Recognized by management for diligent documentation,  self-sufficient problem solving, and being responsive to all parties involved.</li>
                       </ul>
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        June 2019 - October 2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                        Registered Behavioral Technician (RBT)  
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Intercare Therapy Inc.  
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Sacramento, CA 
                        </Typography>
                        <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                        On a team that spearheaded the first rollout of online documentation in the company.
                        <br></br>
                        <ul>
                            <li>Worked cross-functionally with web application developers to give perspective from the field. </li>
                            <li>Passed exam for the state of California to become a Registered Behavioral Technician achieving over 80% and completing over 120 hours with direct coaching. </li>
                            <li>Achieved goals weekly by meeting or surpassing the company standard of 85% or higher over consecutive therapy sessions.</li>
                        </ul>
                        </Typography>
                    </Box>
                        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        May 2018 - May 2019
                        </Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                            Behavioral Technician   
                            </Typography>
                            <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                            Comprehensive Early Autism Services  
                            </Typography>
                            <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                            Chicago, IL 
                            </Typography>
                            <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                            Administed direct care in ABA therapy to children with autism.  Therapy included multiple settings such as community, school, and home environments. 
                            <br></br>
                            <ul>
                            <li>Achieved high success rate with implementation of each goal set for my clients </li>
                            <li>Met success rate of 80% or higher for two consecutive therapy sessions. </li>
                            <li>Learned invaluable de-escalation and crisis prevention techniques with CPI (crisis prevention courses) training. </li>
                        </ul>
                            </Typography>
                        </Box>
                        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        June 2016 - May 2017
                        </Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                            Undergraduate Research Assistant   
                            </Typography>
                            <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                            Language Acquisition Laboratory  
                            </Typography>
                            <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                            Urbana, IL 
                            </Typography>
                            <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                            Responsible for implementing experiments in an language acquisition lab. Test subjects included toddlers, preschoolers, and adults. 
                            <br></br>
                            <ul>
                                <li>Collaborated directly with PhD students to design experiements and materials.</li>
                                <li>Aquired skills in transcribing transcription, utilizing excel, coding of children's speech, and coding visual fixations into from video recordings.</li>
                                <li>Participated in monthly meetings to check data quality and aquired knowledge in statistcial learning.</li>
                            </ul>
                            </Typography>
                        </Box>
                        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        July 2013 - June 2014
                        </Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                            Licensed Practical Nurse  
                            </Typography>
                            <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                            Carle Foundation Hospital 
                            </Typography>
                            <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                            Urbana, IL 
                            </Typography>
                            <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                            Delivered nursing to patients in an outpatient procedure department. Responsible for executing evaluations, interventions and modification of the plan of care individualized to each patient.
                            <br></br>
                            <ul>
                                <li>Cross-trained throughout the department</li>
                                <li>Accomplished high goal achievements by meeting industry standard with State requirments for outpatient procedures.</li>
                                <li>Recognized for diligent documentation, self-sufficient problem solving, organizition of materials.</li>
                            </ul>
                            </Typography>
                        </Box>
                        {/* <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        August 2012 to June 2013
                        </Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                            Heartland Healthcare Center  
                            </Typography>
                            <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                            Urbana, IL 
                            </Typography>
                            <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                            Provided skilled nursing care for assisted living, post-acute medical, rehabilitation and hospice care. Direct care was my primary responsibility, along with supervisor responsibility of nursing assistants.
                            <br></br>
                            KeyAccomplishments: Received numerous complements from families regarding their loved one and passed NCLEX exam. 
                            </Typography>
                        </Box> */}
                    </Box>
                    <Box component="div" style={{textAlign: "center"}}> 
                        <Button className={classes.button}>
                            <a className={classes.link} href={resume} rel="noreferrer" download target="_blank">Download Resume</a>
                        </Button>
                    </Box>
                </Card>
                <Footer />
            </Box>
        </div>
    );
}


export default Experience;