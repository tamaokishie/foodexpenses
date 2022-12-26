import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import { CheckItem } from "../../models/CheckItem";
import { Search } from '../../pages/search/Search'

interface Props{
    open: boolean
    tableItem: CheckItem[]
    handleClose: any
    upDate:any
}

export function SearchDialog(props: Props) {
    return (
        <Dialog
            sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 600 } }}
            maxWidth="xs"
            open={props.open}
            onClose={props.handleClose}
        >
            <DialogTitle>編集</DialogTitle>
            <DialogContent dividers>
                <Search {...props.tableItem} />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.upDate}>更新</Button>
            </DialogActions>
        </Dialog>
    )
}