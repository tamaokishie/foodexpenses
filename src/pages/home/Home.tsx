import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import { useState } from 'react'
import { CheckItem } from '../../models/CheckItem'
import { SearchDialog } from '../../components/parts/SearchDialog'

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
  // 初期値は空白のテーブル、更新関数はチェックボックス押すこと
    const [tableItem, setTableItem] = useState<CheckItem[]>([])
    
    //☑ついてたらtrueとしてテーブルに追加
    const upDate = () => {
        const newItems =  [...tableItem]
        setTableItem (newItems)
        
        }

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    // console.log(typeof(handleClose))
    return (
    <TableContainer component={Paper}>
        <Table>
            <caption>
                <Button onClick={handleClickOpen}>編集</Button>
                <SearchDialog open={open} tableItem={tableItem} handleClose={handleClose} upDate={upDate}/>
                {/* <Dialog
                    sx={{ '& .MuiDialog-paper': { width: '100%', maxHeight: 600 } }}
                    maxWidth='xs'
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>編集</DialogTitle>
                    <DialogContent dividers>
                        <Search {...tableItem} />
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick={upDate}
                            >
                            更新
                        </Button>
                    </DialogActions>
                </Dialog> */}
            </caption>
            <TableHead>
                <TableRow>
                <StyledTableCell>朝食</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableItem.map((item) => (
                <StyledTableRow key={item.name}>
                    <StyledTableCell>
                    {item.name}
                    <br></br>
                    {item.price}
                    </StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}
