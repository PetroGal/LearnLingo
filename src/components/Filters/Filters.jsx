import css from "./Filters.module.css"

export default function Filters({
  selectedLanguage,
  setSelectedLanguage,
  selectedLevel,
  setSelectedLevel,
  selectedPrice,
  setSelectedPrice,
}) {
  return (
    <div>
      <ul className={css.filtersList}>
        <li className={css.filterItem}>
          <div className={css.filterItemsWrapper}>
            <label htmlFor='language'>Languages</label>
            <div className={css.languageSelectWrap}>
              <select
                name='language'
                id='language'
                className={css.filterLanguage}
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value=''>All Languages</option>
                <option value='French'>French</option>
                <option value='English'>English</option>
                <option value='German'>German</option>
                <option value='Ukrainian'>Ukrainian</option>
                <option value='Polish'>Polish</option>
              </select>
              <svg
                className={css.chevronDownLanguageIcon}
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
            <label htmlFor='level'>Level of knowledge</label>
            <div className={css.levelSelectWrap}>
              <select
                name='level'
                id='level'
                className={css.filterLevel}
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value=''>All Levels</option>
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
                <option value=''>All Prices</option>
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
