// import { useState } from 'react'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
// import Checkbox from '@mui/material/Checkbox'

// interface props {
//     name: string,
//     price: string
// }

export function OneListItem (){
    return <></>
}
//({ name, price }: props) {
//     //チェックボックスにチェックをつける
//     const [checked, setChecked] = useState(false)

//     //リストをクリックするとchecked反転
//     const handleToggle = () => {
//         const newChecked = !checked
//         setChecked(newChecked)
//     }
//     //CheckBoxとListのレイアウト
//     return (
//         <ListItemButton role={undefined} onClick={handleToggle} dense>
//             <ListItemIcon>
//                 <Checkbox
//                 edge="start"
//                 checked={checked}
//                 tabIndex={-1}
//                 disableRipple
//                 />
//             </ListItemIcon>
//             <ListItemText primary={name} secondary={price} />
//         </ListItemButton>
//     )
// }
