import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { CheckItem } from '../../models/CheckItem'
import { SearchView } from '../../components/parts/SearchView'

//関数の型定義
type hF = () => void
type uF = (newItems: CheckItem[]) => void

//propertyの型定義
interface Props {
    open: boolean
    tableItem: CheckItem[]
    handleClose: hF
    upDate: uF
}
//propsを引数に分割代入で指定
export function SearchDialog({ open, handleClose, tableItem, upDate }: Props) {
    return (
        <Dialog
            sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 600 } }}
            maxWidth="xs"
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>編集</DialogTitle>
                <DialogContent dividers>
                    <SearchView 
                    //propsを渡す
                    tableItem={ tableItem }
                    name={""}
                    price={""} />
                </DialogContent>
                    <DialogActions>
                        <Button
                        //trueのリストアイテムをHomeのtableItemに反映させる
                            onClick={() => {
                                upDate(
                                tableItem.filter((item) => {
                                return item.checked
                                })
                                );
                                handleClose()
                            }}
                        >
                        更新
                        </Button>
                    </DialogActions>
        </Dialog>
    )
}
