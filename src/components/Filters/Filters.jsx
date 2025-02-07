import { useState } from "react"
import LangSwitcher from "../LangSwitcher/LangSwitcher.jsx"
import css from "./Filters.module.css"

export default function Filters({ value, onSelect }) {
  const [selectedLevel, setSelectedLevel] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")
  return (
    <div>
      <ul className={css.filtersList}>
        <li className={css.filterItem}>
          <LangSwitcher value={value} onSelect={onSelect} />
        </li>
        <li className={css.filterItem}>
          <div className={css.filterItemsWrapper}>
            <label htmlFor='level'>Level of knowledge</label>
            <div className={css.levelSelectWrap}>
              <select
                name='level'
                id='level'
                className={css.filterLevel}
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value='beginner'>A1 Beginner</option>
                <option value='elementary'>A2 Elementary</option>
                <option value='intermediate'>B1 Intermediate</option>
                <option value='upper-intermediate'>
                  B2 Upper-Intermediate
                </option>
              </select>
              <svg
                className={css.chevronDownLevelIcon}
                width='20px'
                height='20px'
              >
                <use href='/public/icons.svg#icon-chevron-downOpt'></use>
              </svg>
            </div>
          </div>
        </li>
        <li className={css.filterItem}>
          <div className={css.filterItemsWrapper}>
            <label htmlFor='price'>Price</label>
            <div className={css.priceSelectWrap}>
              <select
                name='price'
                id='price'
                className={css.filterPrice}
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                <option value='10'>10 $</option>
                <option value='20'>20 $</option>
                <option value='30'>30 $</option>
                <option value='40'>40 $</option>
              </select>
              <svg
                className={css.chevronDownPriceIcon}
                width='20px'
                height='20px'
              >
                <use href='/public/icons.svg#icon-chevron-downOpt'></use>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
