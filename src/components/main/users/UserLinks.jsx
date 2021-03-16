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


const UserLinks = (links) => {
  
  const classes = useStyles();
 
  return (
        <div> 
            { <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell data-testid = "linksId" align="right">Id</TableCell>
                  <TableCell data-testid = "linksTitle" align="right">Title</TableCell>
                  <TableCell data-testid = "linksUrl" align="right">Url</TableCell>
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
                <TableRow>
                    <TableCell align="right">no search links</TableCell>
                </TableRow>                
              )}
              </TableBody>
            </Table>
            </TableContainer>} 
          </div>
  );
}



export default UserLinks;
