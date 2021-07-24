import React from 'react'
import { Button,makeStyles,Table, TableHead, TableRow,TableCell, TableBody} from '@material-ui/core'

const  useStyles =makeStyles({
    create:{
        margin: 20,
        background:'#3FAABF',
        color: '#fff ',
        width: '80%',
        },
        table:{

    border: '1px solid rgba(224, 224, 224, 1)'
        }

})

const Categories = () => {
    const classes = useStyles();
    return (
           <> 
           <Button variant="contained" className={classes.create}>Create Blog</Button>    
           
           <Table className={classes.table}>
               <TableHead>
                   <TableRow>
                       <TableCell>All Categories</TableCell>
                   </TableRow>
               </TableHead>
               <TableBody>
                   <TableRow>
                   <TableCell>Music</TableCell>
                   </TableRow>
                   <TableRow>
                   <TableCell>Tech</TableCell>
                   </TableRow>
                   <TableRow>
                   <TableCell>Sports</TableCell>
                   </TableRow>
                   <TableRow>
                   <TableCell>Ai</TableCell>
                   </TableRow>
                   <TableRow>
                   <TableCell>Cyber Security</TableCell>
                   </TableRow>
                   <TableRow>
                   <TableCell>Projects</TableCell>
                   </TableRow>
                   <TableRow>
                   <TableCell>LifeStyle</TableCell>
                   </TableRow>
                </TableBody>
           </Table>


          </>
     )
}

export default Categories
