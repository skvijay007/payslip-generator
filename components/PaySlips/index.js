import React, {useContext} from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import size from 'lodash/fp/size'

/**
 * List of payslips displayed
 */
const PaySlips = () => {
    const {paySlips} = useContext(GlobalContext);
    if (!size(paySlips)) return <p>No payslips generated.</p>;
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="payslip table" data-testid="payslip-table">
                    <TableHead style={{backgroundColor: 'lightgrey'}}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Pay period</TableCell>
                            <TableCell>Gross income</TableCell>
                            <TableCell>Income tax</TableCell>
                            <TableCell>Net income</TableCell>
                            <TableCell>Super amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {paySlips.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.payPeriodStart?.format('DD MMMM')} – {row.payPeriodEnd?.format('DD MMMM')}</TableCell>
                            <TableCell>{row.grossIncome}</TableCell>
                            <TableCell>{row.incomeTax}</TableCell>
                            <TableCell>{row.netIncome}</TableCell>
                            <TableCell>{row.superAmount}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export default PaySlips;