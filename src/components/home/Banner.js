import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'})center/55% repeat-x #000`,
          height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
         
        '& :last-child': {
            fontSize: 60,
            background: 'white',
            borderRadius:"17px",

             
        }
    }
})

const Banner = () => {
    const classes = useStyle();
     return (
        <>
            <Box className={classes.image}>
                <Typography>BLOG </Typography>
              </Box>
        </>
    )
}
 
export default Banner;