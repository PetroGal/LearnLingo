import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.loadMoreWrap}>
      <button className={css.loadMoreBtn} onClick={onClick}>
        Load More
      </button>
    </div>
  )
}
