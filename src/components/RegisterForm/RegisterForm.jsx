import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext.jsx"
import css from "./RegisterForm.module.css"
import { useState } from "react"

export default function RegisterForm({ onClose }) {
  const { register: firebaseRegister } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const [errorMessage, setErrorMessage] = useState("")

  const onSubmit = async (data) => {
    setErrorMessage("")
    try {
      console.log("🔥 Registering user:", data)

      await firebaseRegister(data.email, data.password, data.name)

      console.log("✅ User registered successfully!")

      console.log("🔄 Resetting form...", reset) // Check if reset function exists
      reset()
      console.log("✅ Form reset complete!")

      onClose()
    } catch (error) {
      console.error("❌ Registration error:", error.message)
      setErrorMessage(error.message)
    }
  }

  return (
    <div className={css.registerContainer}>
      <div className={css.registerContent}>
        <button type='button' className={css.modalCloseBtn} onClick={onClose}>
          <svg className={css.closeIcon} width='32px' height='32px'>
            <use href='/icons.svg#icon-closeNewOpt'></use>
          </svg>
        </button>
        <h2 className={css.registerTitle}>Registration</h2>
        <p className={css.registerText}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        {errorMessage && <p className={css.errorText}>{errorMessage}</p>}{" "}
        <form className={css.registerForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.registerInputWrap}>
            <input
              type='text'
              className={css.registerInput}
              {...register("name", { required: "Name is required" })}
              placeholder='Name'
            />
            {errors.name && <p>{errors.name.message}</p>}

            <input
              type='email'
              className={css.registerInput}
              {...register("email", { required: "Email is required" })}
              placeholder='Email'
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              type='password'
              className={css.registerInput}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              placeholder='Password'
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button type='submit' className={css.registerButton}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
