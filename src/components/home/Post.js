import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 350,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        height: 150
    } 
})

const Post = ({ post }) => {
    const classes = useStyle(); 
    const url="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />
            <Typography>Music</Typography>
      <Typography>hackhim18</Typography>
      <Typography>Author:hackhim18</Typography>
      <Typography>Hi from hackhim18</Typography>
        </Box>
    )
}

export default Post;