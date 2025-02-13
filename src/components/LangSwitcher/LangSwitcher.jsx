import css from "./LangSwitcher.module.css"

export default function LangSwitcher({ slectedLanguage, onLanguageSelect }) {
  const handleChange = (event) => {
    onLanguageSelect(event.target.value)
  }

  return (
    <div className={css.filterItemsWrapper}>
      <label htmlFor='language'>Languages</label>
      <div className={css.languageSelectWrap}>
        <select
          name='language'
          id='language'
          className={css.filterLanguage}
          value={slectedLanguage}
          onChange={handleChange}
        >
          <option value='French'>French</option>
          <option value='English'>English</option>
          <option value='German'>German</option>
          <option value='Ukrainian'>Ukrainian</option>
          <option value='Polish'>Polish</option>
        </select>
        <svg className={css.chevronDownLanguageIcon} width='20px' height='20px'>
          <use href='/public/icons.svg#icon-chevron-downOpt'></use>
        </svg>
      </div>
    </div>
  )
}
