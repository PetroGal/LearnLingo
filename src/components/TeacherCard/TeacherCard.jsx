import React from "react"
import css from "./TeacherCard.module.css"

export default function TeacherCard({
  name,
  surname,
  languages,
  rating,
  lessons_done,
  price_per_hour,
  avatar_url,
  lesson_info,
  conditions,
  levels,
}) {
  return (
    <div className={css.teacherCard}>
      <div className={css.avatarWrapper}>
        <img
          className={css.avatar}
          src={avatar_url}
          alt={`${name} ${surname}`}
        />
      </div>

      <div className={css.teacherInfo}>
        <h3>
          {name} {surname}
        </h3>
        <div className={css.teacherDetails}>
          <p>Languages: {languages}</p>
          <p>Rating: {rating} ⭐</p>
          <p>Lessons Done: {lessons_done}</p>
          <p>Price / hour: ${price_per_hour}</p>
        </div>

        <div className={css.lessonInfo}>
          <p>{lesson_info}</p>
        </div>

        <div className={css.conditions}>
          {conditions.map((condition, index) => (
            <p key={index}>{condition}</p>
          ))}
        </div>

        <div className={css.levels}>
          {levels.map((level, index) => (
            <span key={index} className={css.levelTag}>
              #{level}
            </span>
          ))}
        </div>

        <button className={css.readMoreBtn}>Read more</button>
      </div>
    </div>
  )
}
