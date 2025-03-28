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
              <div className={css.headingWrapper}>
                <h1 className={css.heroTitle}>
                  Unlock your potential with the best{" "}
                  <span className={css.heroSpan}>language</span> tutors
                </h1>
                <p className={css.heroText}>
                  Embark on an Exciting Language Journey with Expert Language
                  Tutors: Elevate your language proficiency to new heights by
                  connecting with highly qualified and experienced tutors.
                </p>
                <button type='button' className={css.startedBtn}>
                  Get started
                </button>
              </div>

              <div className={css.imageWrapper}>
                <img
                  className={css.heroImage}
                  src='/images/headOpt1.svg'
                  alt='Head Image'
                />
                <svg
                  className={css.mac}
                  xmlns='http://www.w3.org/2000/svg'
                  width='361'
                  height='176'
                  viewBox='0 0 361 176'
                  fill='none'
                >
                  <path
                    d='M7.05786 0C3.51331 0 0.640015 2.87903 0.640015 6.43046V240.821C0.640015 244.372 3.51331 247.251 7.05786 247.251H353.942C357.487 247.251 360.36 244.372 360.36 240.821V6.43046C360.36 2.87903 357.487 0 353.942 0H7.05786Z'
                    fill='url(#paint0_linear_14088_53)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_14088_53'
                      x1='180.5'
                      y1='0'
                      x2='180.5'
                      y2='247.251'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#295761' />
                      <stop offset='1' stopColor='#183E49' />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  className={css.apple}
                  xmlns='http://www.w3.org/2000/svg'
                  width='47'
                  height='57'
                  viewBox='0 0 47 57'
                  fill='none'
                >
                  <path
                    d='M35.0906 1.38512C35.0906 4.17511 34.0917 6.77995 32.1008 9.19086C29.6982 12.0572 26.7921 13.7134 23.6407 13.4521C23.6005 13.1175 23.5772 12.7652 23.5772 12.3949C23.5772 9.71678 24.7198 6.8504 26.7489 4.50688C27.7619 3.32027 29.0503 2.33375 30.6127 1.54671C32.1717 0.771334 33.6463 0.342483 35.0332 0.269165C35.0512 0.435053 35.0646 0.600941 35.0738 0.766419C35.0854 0.973266 35.0906 1.1797 35.0906 1.38512Z'
                    fill='url(#paint0_linear_14088_54)'
                  />
                  <path
                    d='M45.6392 43.742C44.8124 45.6909 43.8338 47.4849 42.7 49.1342C41.1545 51.3829 39.8891 52.9391 38.9139 53.8034C37.4021 55.2221 35.7824 55.9487 34.0479 55.9901C32.8027 55.9901 31.3011 55.6284 29.5531 54.895C27.7994 54.1651 26.1877 53.8034 24.7141 53.8034C23.1686 53.8034 21.5111 54.1651 19.7381 54.895C17.9625 55.6284 16.532 56.0107 15.4384 56.0486C13.7751 56.1209 12.1172 55.3736 10.4624 53.8034C9.40615 52.8634 8.08505 51.252 6.50243 48.9689C4.80439 46.5312 3.40837 43.7041 2.31471 40.4812C1.14343 36.9998 0.556274 33.6288 0.556274 30.3651C0.556274 26.6267 1.34792 23.4023 2.93359 20.7004C4.17978 18.5299 5.83765 16.818 7.91262 15.5612C9.98758 14.3043 12.2296 13.6639 14.644 13.6229C15.9651 13.6229 17.6976 14.0399 19.8505 14.8593C21.9973 15.6816 23.3758 16.0985 23.9801 16.0985C24.432 16.0985 25.9633 15.6111 28.5593 14.6389C31.0142 13.7376 33.0861 13.3643 34.7835 13.5113C39.3829 13.89 42.8384 15.7401 45.1364 19.0735C41.0229 21.6167 38.9881 25.1788 39.0286 29.7484C39.0657 33.3079 40.3311 36.2699 42.8181 38.6216C43.9452 39.7132 45.2039 40.5568 46.6043 41.156C46.3006 42.0547 45.98 42.9156 45.6392 43.742Z'
                    fill='url(#paint1_linear_14088_54)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_14088_54'
                      x1='23.5803'
                      y1='0.269165'
                      x2='23.5803'
                      y2='56.0534'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#CBDED3' />
                      <stop offset='1' stopColor='#9EB9AD' />
                    </linearGradient>
                    <linearGradient
                      id='paint1_linear_14088_54'
                      x1='23.5803'
                      y1='0.269165'
                      x2='23.5803'
                      y2='56.0534'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#CBDED3' />
                      <stop offset='1' stopColor='#9EB9AD' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className={css.infoWrapper}>
              <ul className={css.infoList}>
                <li className={css.infoExperience}>
                  <p className={css.infoNumbers}>
                    <span>32,000</span>
                    <span>+</span>
                  </p>
                  <p className={css.infoText}>Experienced tutors</p>
                </li>
                <li className={css.infoReviews}>
                  <p className={css.infoNumbers}>
                    <span>300,000</span>
                    <span>+</span>
                  </p>
                  <p className={css.infoText}>5-star tutor reviews</p>
                </li>
                <li className={css.infoSubjects}>
                  <p className={css.infoNumbers}>
                    <span>120</span>
                    <span>+</span>
                  </p>
                  <p className={css.infoText}>Subjects taught</p>
                </li>
                <li className={css.infoTutors}>
                  <p className={css.infoNumbers}>
                    <span>200</span>
                    <span>+</span>
                  </p>
                  <p className={css.infoText}>Tutor nationalities</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
