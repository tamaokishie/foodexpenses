import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'
import  products  from '../../data/food-expenses.json'

// ヘッダー、フッターの部分
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }))

export default function Home() {

    return (
        <TableContainer component={Paper}>
        <Table>
        <caption >
        <Link to='search'>＋ 登録
            </Link>
            
            </caption>
            <TableHead>
            <TableRow>
                <StyledTableCell>朝食</StyledTableCell> 
            </TableRow>
            </TableHead>
            <TableBody>
            {products.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell>
                    {row.name}
                    <br></br>
                    {row.price}
                </StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        )
}
