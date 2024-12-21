import css from "./Filters.module.css"

export default function Filters() {
  return (
    <div>
      <ul className={css.filtersList}>
        <li className={`${css.filterItem} ${css.filterLanguage}`}>
          <div className={css.filterItemsWrapper}>
            <label htmlFor='languages'>Languages</label>
            <select name='' id=''>
              <option value='french'>French</option>
              <option value='english'>English</option>
              <option value='spain'>Spain</option>
            </select>
          </div>
        </li>
        <li className={`${css.filterItem} ${css.filterLevel}`}>
          <label htmlFor='levels'>Level of knowledge</label>
          <select name='' id=''>
            <option value=''>A1 Beginner</option>
            <option value=''>A1 Beginner</option>
            <option value=''>A1 Beginner</option>
          </select>
        </li>
        <li className={`${css.filterItem} ${css.filterPrice}`}>
          <label htmlFor='prices'>Price</label>
          <select name='' id=''>
            <option value=''>30 $</option>
            <option value=''>30 $</option>
            <option value=''>30 $</option>
          </select>
        </li>
      </ul>
    </div>
  )
}
