import { useState } from "react"
import LangSwitcher from "../LangSwitcher/LangSwitcher.jsx"
import LevelSwitcher from "../LevelSwitcher/LevelSwitcher.jsx"
import PriceSwitcher from "../PriceSwitcher/PriceSwitcher.jsx"
import css from "./Filters.module.css"

export default function Filters({
  allLanguages,
  allLevels,
  selectedLanguage,
  selectedLevel,
  selectedPrice,
  onLanguageSelect,
  onLevelSelect,
  onPriceSelect,
}) {
  return (
    <div>
      <ul className={css.filtersList}>
        <li className={css.filterItem}>
          {allLanguages.length > 0 && (
            <LangSwitcher
              allLanguages={allLanguages}
              selectLanguage={selectedLanguage}
              onLanguageSelect={onLanguageSelect}
            />
          )}
        </li>
        <li className={css.filterItem}>
          {allLevels.length > 0 && (
            <LevelSwitcher
              allLevels={allLevels}
              selectedLevel={selectedLevel}
              onLevelSelect={onLevelSelect}
            />
          )}
        </li>
        <li className={css.filterItem}>
          <PriceSwitcher
            selectedPrice={selectedPrice}
            onPriceSelect={onPriceSelect}
          />
        </li>
      </ul>
    </div>
  )
}
