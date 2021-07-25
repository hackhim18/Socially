import { Box,Link,makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import { Edit ,Delete} from '@material-ui/icons';

const usestyles = makeStyles((theme) =>( {
    image:{
        width: '100%',
        height:'50vh',
        objectFit:'cover',

    },
    container:{
        padding: '0 100px',
        [theme.breakpoints.down('md')]:{
            padding: 0
        }
    },


    icons:{
        float: 'right',
    },
    icon :{
        margin:5,
        border:'1px solid #878787',
        padding: 5,
        borderRadius:10,
    },
    heading: {
        fontSize:30,
        fontWeight:600,
        textAlign:'center',
        margin:'50px 0 10px 0',
     },
     subheading:{
         color: '#878787',
         display: 'flex',
         margin:'20px 0',
         [theme.breakpoints.down("xs")]:{
          display: 'block'
         } 
 
     }
}))


const DetailView = () => {
    const classes = usestyles();
    const url ="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    
    return (
       <Box className={classes.container}>
        < img src={url} alt="banner"  className={classes.image}/>
        <Box className={classes.icons}>
       
           <Link to='/update'><Edit   className={classes.icon} color='primary'/></Link>
           <Delete className={classes.icon } color='error'/>
            </Box> 
            <Typography className={classes.heading}> Title of the Blog</Typography>  
            <Box className={classes.subheading}>
                <Typography>Author: <span style={{fontWeight:"bold"}}>  Himanshu Tripathi</span> </Typography>
                <Typography style={{marginLeft:"auto"}}>22 June 2021</Typography>
            </Box>
         <Typography>This is a blog from  Himanshu Tripathi This is a blog from  Himanshu Tripathi This is a blog from  Himanshu Tripathi This is a blog from  Himanshu TripathiThis is a blog from  Himanshu Tripathi</Typography>
        </Box>
     )
}

export default DetailView
 