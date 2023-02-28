import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Transactions = ({ data, tableHeadings }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
            {tableHeadings && tableHeadings.length && (
              <TableHead sx={{ fontWeight: 'bold' }}>
                <TableRow hover tabIndex={-1}>
                  {tableHeadings.map((heading) => {
                    return (
                      <StyledTableCell
                        key={heading.name}
                        component='th'
                        scope='row'
                        padding='normal'
                      >
                        {heading.name}
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
            )}
            <TableBody>
              {data.length ? (
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const labelId = `enhanced-table-checkbox-${row.number}`;
                    const createdOnDate = new Date(row.createdAt);
                    const createdOn = `${createdOnDate.getDate()}/${
                      createdOnDate.getMonth() + 1
                    }/${createdOnDate.getFullYear()}`;

                    return (
                      <StyledTableRow hover tabIndex={-1} key={row._id}>
                        <StyledTableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='normal'
                        >
                          {row.number}
                        </StyledTableCell>
                        <StyledTableCell>{row.amount}</StyledTableCell>
                        <StyledTableCell>
                          {row.destination_account}
                        </StyledTableCell>
                        <StyledTableCell>{row.description}</StyledTableCell>
                        <StyledTableCell>{createdOn}</StyledTableCell>
                      </StyledTableRow>
                    );
                  })
              ) : (
                <StyledTableRow hover tabIndex={-1}>
                  <TableCell colSpan={5}>No data</TableCell>
                </StyledTableRow>
              )}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

Transactions.defaultProps = {
  data: [],
};

export default Transactions;
