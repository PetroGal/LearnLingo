import css from "./Filters.module.css"

export default function Filters() {
  return (
    <div>
      <ul className={css.filtersList}>
        <li className={css.filterItem}>
          <div className={css.filterItemsWrapper}>
            <label htmlFor='language'>Languages</label>
            <select
              name='language'
              id='language'
              className={css.filterLanguage}
            >
              <option value='French'>French</option>
              <option value='English'>English</option>
              <option value='German'>German</option>
              <option value='Ukrainian'>Ukrainian</option>
              <option value='Polish'>Polish</option>
            </select>
            {/* <svg className={css.loginIcon} width='20px' height='20px'>
              <use href='/icons.svg#icon-logIn_opt'></use>
            </svg> */}
          </div>
        </li>
        <li className={css.filterItem}>
          <div className={css.filterItemsWrapper}>
            <label htmlFor='level'>Level of knowledge</label>
            <select name='level' id='level' className={css.filterLevel}>
              <option value='beginner'>A1 Beginner</option>
              <option value='elementary'>A2 Elementary</option>
              <option value='intermediate'>B1 Intermediate</option>
              <option value='upper-intermediate'>B2 Upper-Intermediate</option>
            </select>
          </div>
        </li>
        <li className={css.filterItem}>
          <div className={css.filterItemsWrapper}>
            <label htmlFor='price'>Price</label>
            <select name='price' id='price' className={css.filterPrice}>
              <option value='10'>10 $</option>
              <option value='20'>20 $</option>
              <option value='30'>30 $</option>
              <option value='40'>40 $</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  )
}
