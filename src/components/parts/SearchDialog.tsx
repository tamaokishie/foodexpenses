import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material'
import { CheckItem } from '../../models/CheckItem'
import { Search } from '../../pages/search/Search'

type hF = () => void
type uF = (newItems: CheckItem[]) => void
interface Props{
    open: boolean
    tableItem: CheckItem[]
    handleClose: hF
    upDate: uF
}

export function SearchDialog(props: Props) {
    const {open, handleClose, tableItem, upDate} = props

    return (
        <Dialog
            sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 600 } }}
            maxWidth="xs"
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>編集</DialogTitle>
            <DialogContent dividers>
                <Search {...tableItem} />
            </DialogContent>
            <DialogActions>
                <Button 
                    onClick={() => {
                        upDate(tableItem
                            .filter((item) => {
                                return item.checked
                            })
                        );
                        handleClose()
                    }}>
                    更新
                </Button>
            </DialogActions>
        </Dialog>
    )
}
