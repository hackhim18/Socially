import React from 'react'
 
import { AppBar,Toolbar,Typography, makeStyles} from "@material-ui/core"
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black' 
    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }, 
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
             <Toolbar className={classes.container}>
           <Link to={'/'}>
           <Typography className={classes.typo} >HOME</Typography>
           </Link> 

             <Typography className={classes.typo} >ABOUT</Typography>
               <Typography className={classes.typo}>CONTACT</Typography>
              <Typography className={classes.typo}>LOGIN</Typography>
             </Toolbar>
        </AppBar>
  
    )
}

export default Header; 
