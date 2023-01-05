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
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import { CheckItem } from '../../models/CheckItem'


export function OneListItem({ name, price }: CheckItem) {
    const [checked, setChecked] = useState(false)

    const handleToggle = () => {
        const newChecked = !checked
        setChecked(newChecked)
    }

    return (
        <ListItemButton role={undefined} onClick={handleToggle} dense>
            <ListItemIcon>
                <Checkbox
                edge="start"
                checked={checked}
                tabIndex={-1}
                disableRipple
                />
            </ListItemIcon>
            <ListItemText primary={name} secondary={price} />
        </ListItemButton>
    )
}
