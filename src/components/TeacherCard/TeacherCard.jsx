import React from "react"
import teachers from "../../utils/teachersData.js"
import css from "./TeacherCard.module.css"

export default function TeacherCard({
  name,
  surname,
  languages,
  rating,
  price_per_hour,
  lessons_done,
  avatar_url,
  lesson_info,
  conditions,
  levels,
}) {
  return (
    <>
      <div className={css.cardContainer}>
        <div className={css.avatarWrapper}>
          <img src={avatar_url} className={css.avatarImg} alt={name} />
        </div>

        <div className={css.teachersDetailsWrapper}>
          <div className={css.teacherRates}>
            <div className={css.languagesName}>
              <p className={css.teacherLanguagesItem}>Languages</p>
              <h3 className={css.teacherName}>
                {name} {surname}
              </h3>
            </div>

            <div className={css.rates}>
              <div className={css.onlineBlock}>
                <svg className={css.bookIcon} width='16' height='16'>
                  <use href='/icons.svg#icon-bookOpenOpt'></use>
                </svg>
                <p className={css.teacherRatesItem}>Lessons online</p>
              </div>

              <p className={css.teacherRatesItem}>
                Lessons done: {lessons_done}
              </p>

              <div className={css.ratingBlock}>
                <svg className={css.starIcon} width='16' height='16'>
                  <use href='/icons.svg#icon-star'></use>
                </svg>
                <p className={css.teacherRatesItem}> Rating: {rating}</p>
              </div>
              <p className={`${css.price} ${css.teacherRatesItem}`}>
                Price / 1 hour:
                <span className={css.pricePerHour}>{price_per_hour}$</span>
              </p>
              <svg className={css.heartIcon} width='26' height='26'>
                <use href='/icons.svg#icon-heartOpt'></use>
              </svg>
            </div>
          </div>

          <ul className={css.teachersInfo}>
            <li>
              <span className={css.infoTitle}>Speaks:</span>{" "}
              <span className={css.speaksLanguagesText}>
                {languages.join(", ")}
              </span>
            </li>
            <li>
              <span className={css.infoTitle}>Lesson info:</span>{" "}
              <span className={css.infoText}>{lesson_info}</span>
            </li>
            <li>
              <span className={css.infoTitle}>Conditions:</span>{" "}
              <span className={css.infoText}>{conditions}</span>
            </li>
          </ul>
          <button className={css.readMoreBtn}>Read more</button>
          <ul className={css.levels}>
            {levels.map((level) => (
              <li key={level} className={css.levelItem}>
                {level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
