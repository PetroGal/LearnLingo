import { useForm } from "react-hook-form"
import css from "./RegisterForm.module.css"

export default function RegisterForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Registering User:", data)
  }

  return (
    <div className={css.registerContainer}>
      <div className={css.registerContent}>
        <button type='button' className={css.modalCloseBtn}>
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
        <form className={css.registerForm}>
          <div className={css.registerInputWrap}>
            <input
              type='text'
              className={css.registerInput}
              {...register("name", { required: "Name is required" })}
              placeholder='Name'
            />
            {errors.name && <p>{errors.name.message}</p>}
            <input
              type='text'
              className={css.registerInput}
              {...register("name", { required: "Name is required" })}
              placeholder='Email'
            />
            {errors.name && <p>{errors.name.message}</p>}
            <input
              type='text'
              className={css.registerInput}
              {...register("name", { required: "Name is required" })}
              placeholder='Password'
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <button type='submit' className={css.registerButton}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
