import React from "react"
import teachers from "../../utils/teachersData.js"
import css from "./TeacherCard.module.css"

// export default function TeacherCard({
//   name,
//   surname,
//   languages,
//   rating,
//   lessons_done,
//   price_per_hour,
//   avatar_url,
//   lesson_info,
//   conditions,
//   levels,
// }) {
//   return (
//     <div className={css.teacherCard}>
//       <div className={css.avatarWrapper}>
//         <img
//           className={css.avatar}
//           src={avatar_url}
//           alt={`${name} ${surname}`}
//         />
//       </div>

//       <div className={css.teacherInfo}>
//         <h3>
//           {name} {surname}
//         </h3>
//         <div className={css.teacherDetails}>
//           <p>Languages: {languages}</p>
//           <p>Rating: {rating} ⭐</p>
//           <p>Lessons Done: {lessons_done}</p>
//           <p>Price / hour: ${price_per_hour}</p>
//         </div>

//         <div className={css.lessonInfo}>
//           <p>{lesson_info}</p>
//         </div>

//         <div className={css.conditions}>
//           {conditions.map((condition, index) => (
//             <p key={index}>{condition}</p>
//           ))}
//         </div>

//         <div className={css.levels}>
//           {levels.map((level, index) => (
//             <span key={index} className={css.levelTag}>
//               #{level}
//             </span>
//           ))}
//         </div>

//         <button className={css.readMoreBtn}>Read more</button>
//       </div>
//     </div>
//   )
// }

export default function TeacherCard({ teachers }) {
  return (
    <>
      <div className={css.cardContainer}>
        <div className={css.cardWrapper}>
          <div className={css.avatarWrapper}>
            <img
              src={teachers[0].avatar_url}
              className={css.avatarImg}
              alt={teachers[0].name}
            />
          </div>
          <div className={css.teachersDetailsWrapper}>
            <div className={css.teacherRates}>
              <p className={css.teacherLanguagesItem}>Languages</p>
              <svg className={css.bookIcon} width='16' height='16'>
                <use href='/icons.svg#icon-bookOpenOpt'></use>
              </svg>
              <p className={css.teacherRatesItem}>Lessons online</p>
              <p className={css.teacherRatesItem}>
                Lessons done: {teachers[0].lessons_done}
              </p>
              <p className={css.teacherRatesItem}>Lessons online</p>
              <svg className={css.starIcon} width='16' height='16'>
                <use href='/icons.svg#icon-star'></use>
              </svg>
              <p className={css.teacherRatesItem}>
                {" "}
                Rating: {teachers[0].rating}
              </p>
              <p className={css.price}>
                Price / 1 hour:{" "}
                <span className={css.pricePerHour}>
                  {teachers[0].price_per_hour}$
                </span>
              </p>
              <svg className={css.heartIcon} width='16' height='16'>
                <use href='/icons.svg#icon-heartOpt'></use>
              </svg>
            </div>

            <div className={css.teachersInfo}>
              <h3>
                {teachers[0].name} {teachers[0].surname}
              </h3>
              <p>Speaks: {teachers[0].languages.join(", ")}</p>
              <p>Lesson info: {teachers[0].lesson_info}</p>
              <p>Conditions: {teachers[0].conditions}</p>
              <button className={css.readMoreBtn}>Read More</button>
            </div>
          </div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  )
}
