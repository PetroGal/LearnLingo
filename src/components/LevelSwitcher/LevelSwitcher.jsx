import css from "./LevelSwitcher.module.css"

export default function LevelSwitcher({
  selectedLevel,
  onLevelSelect,
  allLevels,
}) {
  const handleChange = (event) => {
    onLevelSelect(event.target.value)
  }

  return (
    <div className={css.filterItemsWrapper}>
      <label htmlFor='level'>Level of knowledge</label>
      <div className={css.levelSelectWrap}>
        <select
          name='level'
          id='level'
          className={css.filterLevel}
          value={selectedLevel}
          onChange={handleChange}
        >
          <option value=''>All levels</option>
          {allLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        <svg className={css.chevronDownLevelIcon} width='20px' height='20px'>
          <use href='/public/icons.svg#icon-chevron-downOpt'></use>
        </svg>
      </div>
    </div>
  )
}
