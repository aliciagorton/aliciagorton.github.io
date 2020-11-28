import React from 'react';
import { 
    Grid,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: "2rem",
      fontSize: "1rem",
    },
  }));

function MailButton()  {
    const classes = useStyles();

    return (
        <div>
            <Grid>
                {/* <IconButton variant="contained" color="primary" size="medium" className={classes.button} endIcon={<MailOutlinedIcon/>} href="mailto:apersigehl@gmail.com" target ="_blank"> */}
                <Button variant="contained" color="primary" size="medium" className={classes.button} endIcon={<Icon><MailOutlinedIcon/></Icon>} href="mailto:apersigehl@gmail.com" target ="_blank">
                Get In Touch
                </Button>
            </Grid>
        </div>
    );
}


export default MailButton;
