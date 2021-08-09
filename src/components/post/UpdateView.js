import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from '@material-ui/core'
import React from 'react'
import { AddCircle } from "@material-ui/icons"
import { useState,useEffect } from 'react'
import { getPost,updatePost } from '../../service/api'
import { useHistory } from  'react-router-dom';

 
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
}}))
const initialValues = {
    title:'' ,
    description: '',
    picture: '',
    username: 'Himanshu Tripathi',
    categories: 'All',
    createdDate: new Date()
 }
 

const UpdateView = ({match}) => {
    const classes = useStyle(initialValues);
 const url ="https://images.unsplash.com/photo-1614995008867-32eef7bff38c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNyZWF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60";        
const history = useHistory();
 const [post,setPost] = useState({});
   

  useEffect(()=>{
      const fetchData = async () =>{
          let data = await getPost(match.params.id);
          setPost(data)
          console.log(data);
      }
      fetchData();
  },[])
   //handleChange Function
 const handleChange = (e) =>{
    setPost({...post,[e.target.name]: e.target.value});
}
const updateBlog = async() =>{
    await updatePost(match.params.id, post);
    history.push(`/details/${match.params.id}`)
}
 
return (
    <Box className={classes.container}>
   <img className={classes.image} src={url} alt="banner" />
    
    <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="action"/>
   
   <InputBase placeholder='Title' name="title" onChange={(e) => handleChange(e)} value={post.title}  className={classes.textField} />
   <Button onClick={() => updateBlog()} variant="contained" color="primary">Update</Button>
 </FormControl>
    <TextareaAutosize
    rowsMin={5}
    placeholder="Here you write..."
    className={classes.text}
    value={post.description}
    onChange={(e) => handleChange(e)}
    name="description"
/>

</Box>

    )
}

export default UpdateView
