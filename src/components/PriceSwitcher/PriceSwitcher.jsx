import css from "./PriceSwitcher.module.css"

export default function PriceSwitcher({ selectedPrice, onPriceSelect }) {
  const handleChange = (event) => {
    onPriceSelect(event.target.value)
  }
  return (
    <div className={css.filterItemsWrapper}>
      <label htmlFor='price'>Price</label>
      <div className={css.priceSelectWrap}>
        <select
          name='price'
          id='price'
          className={css.filterPrice}
          value={selectedPrice}
          onChange={handleChange}
        >
          <option value='10'>10 $</option>
          <option value='20'>20 $</option>
          <option value='30'>30 $</option>
          <option value='40'>40 $</option>
        </select>
        <svg className={css.chevronDownPriceIcon} width='20px' height='20px'>
          <use href='/public/icons.svg#icon-chevron-downOpt'></use>
        </svg>
      </div>
    </div>
  )
}
