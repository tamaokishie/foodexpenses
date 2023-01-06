import { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { OneListItem } from "./OneListItem";
import { CheckItem } from "../../models/CheckItem"

//propertyの型定義
interface Props {
  tableItem: CheckItem[]
}

//propsを受け取る
export function SearchView({ tableItem }: Props) {
    const notTableItems: CheckItem = {
    name: "No Item Found",
    price: "",
    checked: false
  }

  //入力するキーワード（初期値は空）
  const [keyword, setKeyword] = useState("");
  //クリックしたらリストを表示(true), 何もしなかったら非表示(false)
  const [showLists, setShowLists] = useState(false);
  // 検索したときにできる新たなリスト（配列）※初期値は空のため、tableItemを全件渡す
  const [filteredTableItems, setFilteredTableItems] = useState(tableItem);

  // 入力したキーワードをすべて削除したら（""）、更新関数(setFilteredProducts)に初期値と同じproductsが渡される
  useEffect(() => {
    if (keyword === "") {
      setFilteredTableItems(tableItem);
      return;
    }

    // 入力されたキーワードの定義
    const searchKeywords = keyword
      //空白削る
      .trim()
      //小文字変換
      .toLowerCase()
      //空白文字以外の連続文字にヒット＋ gフラグ = すべて配列として返却
      .match(/[^\s]+/g);

    //入力されたキーワードが空白文字のみの場合
    if (searchKeywords === null) {
      setFilteredTableItems(tableItem);
      return;
    }

    const result = tableItem.filter((product) =>
      searchKeywords.every(
        (kw) => product.name.toLowerCase().indexOf(kw) !== -1
      )
    );

    setFilteredTableItems(result.length ? result : [notTableItems]);
  }, [keyword]);

  return (
    <>
      <TextField
      //入力エリア
        id="field"
        color="secondary"
        variant="outlined"
        label="enter keywords"
        onChange={(e) => setKeyword(e.target.value)}
        onClick={() => setShowLists(true)}
      />
      {showLists &&
        filteredTableItems.map((item) => (
          <OneListItem
            item ={item}
          />
        ))}
    </>
  )
}
