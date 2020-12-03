import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import resume_pdf from './images/AliciaGorton.pdf';
import DescriptionIcon from '@material-ui/icons/Description';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  button: {
    background: "#0288d1",

    "&:hover": {
        background: "#01579b"
    },
    padding: "1rem",
    margin: "2rem",
    fontSize: "1rem",
  },
  iconRoot: {
    width: "1.1em",
  },
}));

function Resume() {

    const classes = useStyles();

    return (
        <div>
          <Button 
           variant="contained" 
            color="primary" 
            size="medium" 
            className={classes.button}
            endIcon={
              <Icon
                classes={{
                  root: classes.iconRoot,
                }}  
              >
                <DescriptionIcon/>
              </Icon>} 
            href={resume_pdf} 
            target ="_blank">
            Resume
                {/* <a href={resume_pdf} className={classes.resumeBTN} target="_blank">Resumé</a> */}
            </Button>  
        </div>
    )
}

export default Resume;
