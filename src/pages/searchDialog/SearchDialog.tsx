import { useEffect, useState } from 'react'
import { TextField } from '@material-ui/core'
import { OneListItem } from "../../components/parts/OneListItem"
import { CheckItem } from '../../models/CheckItem'
import products from '../../data/food-expenses.json'

interface Props{
    tableItem: CheckItem[]
}
export function SearchDialog(items: CheckItem[], props:Props) {
    const notProducts: CheckItem = {
      name: "No Item Found",
      price: "",
      checked: false
    }
    const {tableItem} = props

  //入力するキーワード（初期値は空）
    const [keyword, setKeyword] = useState("")
  //クリックしたらリストを表示(true), 何もしなかったら非表示(false)
    const [showLists, setShowLists] = useState(false)
  // 検索したときにできる新たなリスト（配列）※初期値は空のため、productsを全件渡す
    const [filteredProducts, setFilteredProducts] = useState(tableItem)

  // 入力したキーワードをすべて削除したら（""）、更新関数(setFilteredProducts)に初期値と同じproductsが渡される
    useEffect(() => {
    if (keyword === "") {
        setFilteredProducts(tableItem)
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
    if (searchKeywords === null) {
        setFilteredProducts(tableItem)
        return;
    }

    const result = tableItem.filter((product) =>
        searchKeywords.every(
        (kw) => product.name.toLowerCase().indexOf(kw) !== -1
        )
    );

    setFilteredProducts(result.length ? result : [notProducts])
    }, [keyword])

    return (
    //入力ボックス
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
        filteredProducts.map((v, i) => (
            <OneListItem key={i} name={v.name} price={v.price} checked={v.checked} />
        ))}
    </>
    )
}
