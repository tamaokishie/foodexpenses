import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { CheckItem } from '../../models/CheckItem'

// 1つの食材リスト
export function OneListItem({ name, price, checked }: CheckItem) {
    return (
        <ListItem
            dense
            button
            alignItems='center'
            onClick={() =>{ checked = !checked} }
            >
            <ListItemIcon>
                <Checkbox edge='start' checked={checked} />
            </ListItemIcon>
            <ListItemText primary={name} secondary={price} />
        </ListItem>
    )
}
