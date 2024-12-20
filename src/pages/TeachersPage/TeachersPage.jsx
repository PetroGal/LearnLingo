import Filters from "../../components/Filters/Filters.jsx"
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx"
import TeachersList from "../../components/TeachersList/TeachersList.jsx"
import css from "./TeachersPage.module.css"

export default function TeachersPage() {
  return (
    <div className={css.teachersSection}>
      <div className={css.teachersContainer}>
        <Filters />
        <TeachersList />
        <LoadMoreBtn />
      </div>
    </div>
  )
}
