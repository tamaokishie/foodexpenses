import { useState } from "react";
import { Checkbox, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Item } from "../../models/item";

// productsの一覧表示
export function OneListItem({name, price}:Item){
    const [inputCheck, setInputCheck] = useState(false)

    
    return(
        <ListItem
            dense
            button
            alignItems="center" divider 
            onClick={() => setInputCheck(!inputCheck)}>
            <ListItemIcon>
                <Checkbox 
                    edge = "start"
                    checked = {inputCheck}
                />
            </ListItemIcon>
            <ListItemText primary={name} secondary={price} />
        </ListItem>
    )
}

//checkboxをクリック（登録）して、テーブルに追加する
