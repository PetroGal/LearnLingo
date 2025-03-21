import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext.jsx"
import { useState } from "react"
import css from "./LoginForm.module.css"

export default function LoginForm({ onClose }) {
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [errorMessage, setErrorMessage] = useState("")

  const onSubmit = async (data) => {
    setErrorMessage("")
    try {
      console.log("🔑 Logging in user:", data.email)
      await login(data.email, data.password)
      console.log("✅ Login successful!")
      onClose() // Закриваємо модальне вікно після успішного логіну
    } catch (error) {
      console.error("❌ Login error:", error.message)
      setErrorMessage(error.message)
    }
  }

  return (
    <div className={css.loginContainer}>
      <div className={css.loginContent}>
        <button type='button' className={css.modalCloseBtn} onClick={onClose}>
          <svg className={css.closeIcon} width='32px' height='32px'>
            <use href='/icons.svg#icon-closeNewOpt'></use>
          </svg>
        </button>
        <h2 className={css.loginTitle}>Log In</h2>
        <p className={css.loginText}>
          Welcome back! Please enter your credentials to access your account.
        </p>

        {errorMessage && <p className={css.errorText}>{errorMessage}</p>}

        <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.loginInputWrap}>
            <input
              type='email'
              className={css.loginInput}
              {...register("email", { required: "Email is required" })}
              placeholder='Email'
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
              type='password'
              className={css.loginInput}
              {...register("password", { required: "Password is required" })}
              placeholder='Password'
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button type='submit' className={css.loginButton}>
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}
