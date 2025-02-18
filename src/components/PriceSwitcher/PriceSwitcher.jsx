import css from "./PriceSwitcher.module.css"

export default function PriceSwitcher({
  selectedPrice,
  onPriceSelect,
  allPrices,
}) {
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
          <option value=''>All prices</option>
          {allPrices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
        <svg className={css.chevronDownPriceIcon} width='20px' height='20px'>
          <use href='/public/icons.svg#icon-chevron-downOpt'></use>
        </svg>
      </div>
    </div>
  )
}
