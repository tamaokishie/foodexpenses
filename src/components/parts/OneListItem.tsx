import { useState } from 'react'
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { CheckItem } from '../../models/CheckItem'

// productsの一覧表示
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
