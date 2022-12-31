import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import { CheckItem } from '../../models/CheckItem'
import { Search } from '../../components/parts/Search'
import products from '../../data/food-expenses.json'
import { Item } from '../../models/item'

// ホーム画面
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
    '&:last-child td, &:last-child th': {
    border: 0,
    },
}))

export default function Home() {

    const addChecked = (product: Item) => {
        const newProduct: CheckItem = {
            ...product,
            ...{checked: true}
        }
        return newProduct
    }
    const newProducts: CheckItem[] = products.map(addChecked)

    
    // 初期値は空白のテーブル、更新関数は食材を選択すること
    const [tableItem, setTableItem] = useState<CheckItem[]>(newProducts)
    
    //☑ついたらテーブルに追加
    function upDate (newItems: CheckItem[]) {
        setTableItem (newItems)
    }
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
        
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
    <TableContainer component={Paper}>
        <Table>
            <caption>
                <Button onClick={handleClickOpen}>編集</Button>
                <Search open={open} tableItem={tableItem} handleClose={handleClose}
                upDate={items => upDate(items)}/>
            </caption>
            <TableHead>
                <TableRow>
                <StyledTableCell>朝食</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableItem.filter((item) =>{
                    return item.checked
                })
                .map((item) => (
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
