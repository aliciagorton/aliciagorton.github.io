import React from 'react';
import { 
    Grid,
    IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function MailButton()  {
    const classes = useStyles();

    return (
        <div>
            <Grid>
                <IconButton variant="contained" color="primary" size="large" className={classes.button} endIcon={<MailOutlinedIcon/>} href="mailto:apersigehl@gmail.com" target ="_blank">
                Get In Touch
                </IconButton>
            </Grid>
        </div>
    );
}


export default MailButton;
