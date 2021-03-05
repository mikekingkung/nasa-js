import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }


// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


const UserLinks = (links) => {
  
  console.log("links", links);

  const classes = useStyles();


  console.log("links", links)
   
  console.log("links", links.links.length)
  
  {Array.isArray(links) && links.links.length > 0 ?
    console.log("links Populated")
     :
     console.log("links not Populated")
     };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {Array.isArray(links.links) && links.links.length > 0 ?
        (links.links.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.url}</TableCell>
            </TableRow>
        ))):
         (
            console.log("links not Populated render")
         )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserLinks;
