import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from '@material-ui/core'
import React from 'react'
import { AddCircle } from "@material-ui/icons"
 

 
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
button:{
    color: "yellow"
}


    }
}))

const CreateView = () => {
    const classes = useStyle();
 const url ="https://images.unsplash.com/photo-1614995008867-32eef7bff38c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNyZWF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60";        
    return (
    <Box className={classes.container}>
   <img className={classes.image} src={url} alt="banner" />
    
    <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="action"/>
   
   <InputBase placeholder='Title'  className={classes.textField}/>
   <Button variant="large" color="primary" className={classes.button}>Publish</Button>   
    </FormControl>
    <TextareaAutosize
    rowsMin={5}
    placeholder="Here you write..."
    className={classes.text}
    />
 
</Box>

    )
}

export default CreateView
