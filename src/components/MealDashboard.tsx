import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";
import { CheckItem } from "../models/CheckItem";
import { Item } from "../models/Item";
import { SearchDialog } from "../pages/searchDialog/SearchDialog";
import products from "../data/food-expenses.json";

//テーブルのレイアウト
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface props {
  title :string
}

export function MealDashboard({title}: props) {
  //初めのテーブルアイテムはfalseで表示
  const addChecked = (product: Item) => {
    const newProduct: CheckItem = {
      ...product,
      ...{ checked: false },
    };
    return newProduct;
  };
  //falseにしたproductsをmapする
  const newProducts: CheckItem[] = products.map(addChecked);

  //初期値はmapしたfalseのproducts
  const [tableItem, setTableItem] = useState<CheckItem[]>(newProducts);
  
  //新しいリストアイテム（更新ボタンを押したときにはtrueに変わってる）をテーブルに追加していく
  function upDate(newItems: CheckItem[]) {
    setTableItem(newItems);
  }
  //Dialogを開く
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //合計金額を計算した値
  const calcTotalPrice = (tableItem:CheckItem[]) => {
    return tableItem
      .filter((item) => {
        return item.checked
      })
      .reduce((sum: number, val: CheckItem): number => {
        return sum + val.price;
      }, 0);
  }
  
  //初期値は空の合計金額
  const [totalPrice, setTotalPrice] = useState(calcTotalPrice(tableItem));

  //合計金額を更新ボタン押されるたびに更新
  function upDateSum (newTableItem: CheckItem[]) {
    setTotalPrice(calcTotalPrice(newTableItem))
  }
  
  return (
    <>
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <TableContainer component={Paper}>
          <Table>
            <caption>
              <Button onClick={handleClickOpen}>編集</Button>
              <SearchDialog
                open={open}
                tableItem={tableItem}
                handleClose={handleClose}
                upDate={(items) => upDate(items)}
                upDateSum={(items) => upDateSum(items)} 
              />
            </caption>
            <TableHead>
              <TableRow>
                <StyledTableCell>{title}</StyledTableCell>
                <StyledTableCell align="right">
                  { `合計 : ${ totalPrice } 円` }
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableItem
                .filter((item) => {
                  return item.checked;
                })
                .map((item) => (
                  <StyledTableRow key={item.name}>
                    <StyledTableCell>{item.name}</StyledTableCell>
                    <StyledTableCell align="right">
                      {item.price + " 円"}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={1} />
    </Grid>
    </>
  );
}
