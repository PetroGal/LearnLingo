import css from "./LangSwitcher.module.css"

export default function LangSwitcher({
  slectedLanguage,
  onLanguageSelect,
  allLanguages,
}) {
  const handleChange = (event) => {
    onLanguageSelect(event.target.value)
  }
  console.log("Languages in LangSwitcher:", allLanguages)
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
          <option value=''>All languages</option>
          {allLanguages?.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        <svg className={css.chevronDownLanguageIcon} width='20px' height='20px'>
          <use href='/public/icons.svg#icon-chevron-downOpt'></use>
        </svg>
      </div>
    </div>
  )
}
