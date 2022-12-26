import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import { CheckItem } from "../../models/CheckItem";
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
                <Button 
                    onClick={() => {
                        props.upDate(props.tableItem
                            .filter((item) => {
                                if(item.checked === true) {
                                    return item
                                }else{
                                    // eslint-disable-next-line array-callback-return
                                    return
                                }
                            })
                        );
                        props.handleClose()
                    }}>
                    更新
                </Button>
            </DialogActions>
        </Dialog>
    )
}
