import TeacherCard from "../TeacherCard/TeacherCard.jsx"
import teachers from "../../utils/teachersData.js"
import css from "./TeachersList.module.css"

// export default function TeachersList() {
//   return (
//     <ul className={css.teachersList}>
//       {teachers.map((teacher) => (
//         <TeacherCard key={teachers.name + teachers.surname} {...teacher} />
//       ))}
//     </ul>
//   )
// }

export default function TeachersList() {
  const [visibleCards, setVisibleCards] = useState(3) // Initially show 3 cards

  // Function to load more cards
  const loadMoreCards = () => {
    setVisibleCards((prevVisible) => prevVisible + 3)
  }

  return (
    <div>
      <div className={css.teachersList}>
        {/* Slice the teachers array to only show the visibleCards */}
        {teachers.slice(0, visibleCards).map((teacher, index) => (
          <TeacherCard key={teacher.id || index} {...teacher} />
        ))}
      </div>

      {/* Show the "Load More" button only if there are more cards to load */}
      {visibleCards < teachers.length && (
        <button className={css.loadMoreBtn} onClick={loadMoreCards}>
          Load More
        </button>
      )}
    </div>
  )
}
