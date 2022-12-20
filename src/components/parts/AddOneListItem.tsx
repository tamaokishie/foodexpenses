//1つのリストアイテムを（OneListItem）クリックすると、ホーム画面のテーブルに登録される
import { useState } from "react"
import Home from "../../pages/home/Home"
import { OneListItem } from "./OneListItem"

//検索部分は関係ない
//oneListItem1つにstateをもたせる, 初期値はテーブルが空の状態、更新後(checkboxに印ついたら)テーブルに追加される


export function AddOneListItem (){
    
    // const AddItem = () => {
    //     setAddTableItem()
    // }
    return(
        //HOME画面のテーブルにデータ返す
        <>
            <Home/>
        </>
    )
}
