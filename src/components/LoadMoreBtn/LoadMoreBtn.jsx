import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn() {
  return (
    <div className={css.loadMoreWrap}>
      <button className={css.loadMoreBtn}>Load More</button>
    </div>
  )
}
