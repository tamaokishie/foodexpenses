// カードを選んで登録したら食材が追加される

// import Button from '@material-ui/core/Button';

// export function AllFood() {
//     return(
//     <>
//     <Button variant="contained" color="primary" disableElevation>
//     Disable elevation
//     </Button>
//     </>
//     )
// }

import { Checkbox, ListItem, ListItemIcon } from "@material-ui/core";
import React, { useState } from "react";

export function AllFood() {
    const [count, setCount] = useState(0);

    return (
    <>
        <h2>{count}</h2>
        <ListItem onClick={() => setCount(count + 1)}>
        <ListItemIcon>
            <Checkbox />
        </ListItemIcon>
        
        </ListItem>
    </>
    );
}
