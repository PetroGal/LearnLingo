import { useForm } from "react-hook-form"
import css from "./LoginForm.module.css"

export default function LoginForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Registering User:", data)
  }

  return (
    <div className={css.loginContainer}>
      <div className={css.loginContent}>
        <button type='button' className={css.modalCloseBtn}>
          <svg className={css.closeIcon} width='32px' height='32px'>
            <use href='/icons.svg#icon-closeNewOpt'></use>
          </svg>
        </button>
        <h2 className={css.loginTitle}>Log In</h2>
        <p className={css.loginText}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <form className={css.loginForm}>
          <div className={css.loginInputWrap}>
            {errors.name && <p>{errors.name.message}</p>}
            <input
              type='text'
              className={css.loginInput}
              {...register("email", { required: "Email is required" })}
              placeholder='Email'
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
              type='text'
              className={css.loginInput}
              {...register("password", { required: "Password is required" })}
              placeholder='Password'
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button type='submit' className={css.loginButton} onClick={onClose}>
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}
