import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { AddCircle } from "@material-ui/icons"
import { createPost } from '../../service/api'
 

 
const useStyle = makeStyles((theme) => ({
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
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:12
    },
    textField:{
        flex:1,
        margin: '0 10px',
        fontSize: 25
    },
    text:{
  width:' 100%',
  border: 'none',
  marginTop: 50,
  fontSize:18,
  '&:focus-visible':{
  outline:'none'
},

}
}))

const initialValues = {
   title:'' ,
   description: '',
   picture: '',
   username: 'Himanshu Tripathi',
   categories: 'All',
   createDate: new Date()
}



const CreateView = () => {
    const classes = useStyle();
 const url ="https://images.unsplash.com/photo-1614995008867-32eef7bff38c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNyZWF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60";        
   
 const [post, setPost] = useState(initialValues)

 //handleChange Function
 const handleChange =(e) =>{
     setPost({...post,[e.target.name]: e.target.value});

  }
 const savePost = async ()=> {
  await createPost(post);
 }
 
 return (
    <Box className={classes.container}>
   <img className={classes.image} src={url} alt="banner" />
    
    <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="action"/>
   
   <InputBase
   onChange={(e) => handleChange(e)} 
   placeholder='Title'  
   className={classes.textField}
   name= "title"
   />
   <Button onClick={() => savePost()} variant="contained" color="primary"  >Publish</Button> 
     </FormControl>
    <TextareaAutosize
    rowsMin={5}
    placeholder="Here you write..."
    className={classes.text}
    onChange={(e) => handleChange(e)}
    name= "description"
    />

 
</Box>

    )
}

export default CreateView
