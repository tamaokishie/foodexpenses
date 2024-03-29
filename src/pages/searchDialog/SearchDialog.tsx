import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { CheckItem } from '../../models/CheckItem'
import { SearchView } from '../../components/SearchView'

//関数の型定義
type hF = () => void
type uF = (newItems: CheckItem[]) => void
type usF = (newItems: CheckItem[]) => void

//propertyの型定義
interface Props {
  open: boolean
  tableItem: CheckItem[]
  handleClose: hF
  upDate: uF
  upDateSum: usF
}
//propsを引数に分割代入で指定
export function SearchDialog({
  open,
  handleClose,
  tableItem,
  upDate,
  upDateSum,
}: Props) {
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%', maxHeight: 600 } }}
      maxWidth='xs'
      open={open}
      //DialogのonClickにhandleCloseを呼び出す
      onClose={handleClose}
    >
      <DialogTitle>編集</DialogTitle>
      <DialogContent dividers>
        <SearchView
          //propsを渡す
          tableItem={tableItem}
        />
      </DialogContent>
      <DialogActions>
        <Button
          //trueのリストアイテム(props)をHomeのtableItemに渡す
          onClick={() => {
            upDate(tableItem)
            handleClose()
            upDateSum(tableItem)
          }}
        >
          更新
        </Button>
      </DialogActions>
    </Dialog>
  )
}
