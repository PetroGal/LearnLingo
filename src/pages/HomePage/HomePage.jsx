import React from "react"
import Header from "../../components/Header/Header.jsx"
import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <div>
      <main>
        <section className={css.homePageSection}>
          <div className={css.homePageContainer}>
            <div className={css.heroWrapper}>
              <div className={css.homeHeading}>
                <div className={css.headingWrapper}>
                  <h1>Unlock your potential with the best language tutors</h1>
                  <p>
                    Embark on an Exciting Language Journey with Expert Language
                    Tutors: Elevate your language proficiency to new heights by
                    connecting with highly qualified and experienced tutors.
                  </p>
                  <button></button>
                </div>
              </div>
              <div className={css.imageWrapper}>
                <img
                  className={css.heroImage}
                  srcSet='../../images/mainImage1x.jpg 1x, ../../mainImage2x.jpg 2x'
                  alt='Teacher with loptop:)'
                />
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </div>
  )
}
