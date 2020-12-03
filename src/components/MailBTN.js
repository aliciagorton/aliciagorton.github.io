import React from 'react';
import { 
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: "2rem",
      fontSize: "1rem",
      padding: "1rem",
    
      background: "#0288d1",
    },
  }));

function MailButton() {

    const classes = useStyles();

    return (
        <div>
            <Button 
            variant="contained" 
            color="primary" 
            size="medium" 
            className={classes.button} 
            endIcon={<Icon><MailOutlinedIcon/></Icon>} 
            href="mailto:apersigehl@gmail.com" target ="_blank">
            Get In Touch
            </Button> 
        </div>
    );
}


export default MailButton;
