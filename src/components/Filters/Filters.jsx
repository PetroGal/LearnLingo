import { useState } from "react"
import LangSwitcher from "../LangSwitcher/LangSwitcher.jsx"
import LevelSwitcher from "../LevelSwitcher/LevelSwitcher.jsx"
import PriceSwitcher from "../PriceSwitcher/PriceSwitcher.jsx"
import css from "./Filters.module.css"

export default function Filters({
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
          <LangSwitcher
            selectLanguage={selectedLanguage}
            onLanguageSelect={onLanguageSelect}
          />
        </li>
        <li className={css.filterItem}>
          <LevelSwitcher
            selectedLevel={selectedLevel}
            onLevelSelect={onLevelSelect}
          />
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
