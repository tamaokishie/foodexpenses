// 検索したらカードが表示される（カードはSerchCard.tsx）

import { ListItem, ListItemText, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";

// Propsの型定義
interface Item {
    text: string
}

export function Search (){
    // 対象データ（本来はjsonファイル）
    const products: string[] = [
        "apple",
        "banana",
        "orange",
        "cheese cake",
        "banana cake",
        "apple juice",
        "orange juice"
        ]
    // productsの一覧表示(Material-UI)
    const ListItems: React.FC<Item> = (item) => (
        <ListItem alignItems="center" divider>
        <ListItemText primary={item.text} />
        </ListItem>
        )

    // 検索キーワードの入力を受け付けるUI
        //入力するキーワード（初期値は空）
        const [keyword, setKeyword] = useState("")
        //クリックしたらリストを表示(true), 何もしなかったら非表示(false)
        const [showLists, setShowLists] = useState(false)
        // 検索したときにできる新たなリスト（配列）※初期値は空のため、productsを全件渡す
        const [filteredProducts, setFilteredProducts] = useState(products)

    // 入力したキーワードをすべて削除したら（""）、更新関数(setFilteredProducts)に初期値と同じproductsが渡される
        useEffect(() => {
            if(keyword === ""){
                setFilteredProducts(products)
                return
            }

    // 入力されたキーワードの定義
        const searchKeywords = keyword
        //空白削る
        .trim()
        //小文字変換
        .toLowerCase()
        //空白文字以外の連続文字にヒット＋ gフラグ = すべて配列として返却
        .match(/[^\s]+/g)

    //入力されたキーワードが空白文字のみの場合
        if(searchKeywords === null){
            setFilteredProducts(products)
            return
        }
    //?
        const result = products.filter((product) =>
        searchKeywords.every((kw) => product.toLowerCase().indexOf(kw) !== -1)
    )
    //?
    setFilteredProducts(result.length ? result : ["No Item Found"]);
    }, [keyword]);

    return(
    //入力ボックス(Material-UI)
        <>
        <TextField
        id="field"
        color="secondary"
        variant="outlined"
        label="enter keywords"
        onChange={(e) => setKeyword(e.target.value)}
        onClick={() => setShowLists(true)}
        />
        
        {showLists &&
        filteredProducts.map((v, i) => <ListItems key={i} text={v} />)}
        </>
    )
}