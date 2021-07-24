import { Box,makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import { Edit ,Delete } from '@material-ui/icons';

const usestyles = makeStyles({
    image:{
        width: '100%',
        height:'50vh',
        objectFit:'cover',

    },
    container:{
        padding: '0 100px',
    },
    icons:{
        float: 'right',
    },
    icon :{
        margin:5,
        border:'1px solid #878787',
        padding: 5,
        borderRadius:10,
    }


})


const DetailView = () => {
    const classes = usestyles();
    const url ="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    
    return (
       <Box className={classes.container}>
        < img className={classes.image} src={url} alt="banner" />
        <Box className={classes.icons}>
            <Edit   className={classes.icon} color='primary'/>
            <Delete className={classes.icon } color='error'/>
            </Box> 
            <Typography className={classes.heading}> Title of the Blog</Typography>      
        </Box>
     )
}

export default DetailView
