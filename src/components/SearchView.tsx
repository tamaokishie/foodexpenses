import { useEffect, useState } from 'react'
import { TextField } from '@material-ui/core'
import { CheckItem } from '../models/CheckItem'
import {
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

//propertyの型定義
interface Props {
  tableItem: CheckItem[]
}

//propsを受け取る
export function SearchView({ tableItem }: Props) {
  const notTableItems: CheckItem = {
    name: 'No Item Found',
    price: 0,
    checked: false,
  }

  //入力するキーワード（初期値は空）
  const [keyword, setKeyword] = useState('')
  // 検索したときにできる新たなリスト（配列）※初期値は空のため、tableItemを全件渡す
  const [filteredTableItems, setFilteredTableItems] = useState(tableItem)

  // 入力したキーワードをすべて削除したら（""）、更新関数(setFilteredProducts)に初期値と同じproductsが渡される
  useEffect(() => {
    if (keyword === '') {
      setFilteredTableItems(tableItem)
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
      setFilteredTableItems(tableItem)
      return
    }

    const result = tableItem.filter((product) =>
      searchKeywords.every(
        (kw) => product.name.toLowerCase().indexOf(kw) !== -1
      )
    )

    setFilteredTableItems(result.length ? result : [notTableItems])
  }, [keyword])

  const [render, setRender] = useState(true)

  return (
    <>
      <TextField
        //入力エリア
        id='field'
        color='secondary'
        variant='outlined'
        label='食材を入力してください'
        onChange={(e) => setKeyword(e.target.value)}
      />
      {filteredTableItems.map((item) => {
        //リストをクリックするとchecked反転
        const handleToggle = () => {
          item.checked = !item.checked
          setRender(!render)
        }
        return (
          <ListItemButton role={undefined} onClick={handleToggle} dense>
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={item.checked}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={item.name} />
            <ListItemText
              style={{ display: 'flex', justifyContent: 'flex-end' }}
              primary={item.price + ' 円'}
            />
          </ListItemButton>
        )
      })}
    </>
  )
}
