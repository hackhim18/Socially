import { Box,Link,makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import { useEffect, useState } from 'react';
import { Edit ,Delete} from '@material-ui/icons';
import { getPost,deletePost } from '../../service/api';
import { useHistory } from 'react-router-dom';

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
 
     },
     link:{
         textDecoration:'none',
         color: 'inherit '

     }
}))
    

const DetailView = ({match}) => {
    const classes = usestyles();
    const url ="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    const [post , setPost] = useState({});
    useEffect(() =>{
        const fetchData = async() =>{
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data); 
        }
        fetchData();
    },[])
const history = useHistory();

const deleteBlog = async () => {    
    await deletePost(post._id);
    history.push('/')
}


    return (
       <Box className={classes.container}>
        < img src={post.picture || url} alt="banner"  className={classes.image}/>
        <Box className={classes.icons}>
            <Link href={`/update/${post._id}`}>
            <Edit className={classes.icon} color='primary'/></Link>    
            <Delete onClick={()=> deleteBlog} className={classes.icon } color='error'/>
            </Box> 
            <Typography className={classes.heading}>{post.title}</Typography>  
            <Box className={classes.subheading}>
              <Link href ={`/?username=${post.username}`} className={classes.link}> 
                <Typography>Author: <span style={{fontWeight:"bold"}}> {post.username}</span> </Typography>
                </Link>
                <Typography style={{marginLeft:"auto"}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
         <Typography>{post.description}</Typography>
        </Box>
     )
}

export default DetailView
 