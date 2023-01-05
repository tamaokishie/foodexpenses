// import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
// import { CheckItem } from '../../models/CheckItem'

// export function OneListItem({ name, price, checked }: CheckItem) {
//     return (
//         <ListItem
//             dense
//             button
//             alignItems='center'
//             onClick={() =>{ checked = !checked} }>
//             <ListItemIcon>
//                 <Checkbox edge='start' checked={checked} />
//             </ListItemIcon>
//             <ListItemText primary={name} secondary={price} />
//         </ListItem>
//     )
// }

import { useState } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import { CheckItem } from '../../models/CheckItem'

export function OneListItem({ name, price }: CheckItem) {
    const [checked, setChecked] = useState([0])

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
        newChecked.push(value)
        } else {
        newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    return (
        <List>
        {[1].map((value) => {
            return (
                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                    <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary={name} secondary={price} />
                </ListItemButton>
            )
        })}
        </List>
    )
}
