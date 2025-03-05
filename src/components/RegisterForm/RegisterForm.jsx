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
    <div>
      <button type='button' className={css.modalOpenBtn}>
        <svg className={css.closeIcon} width='32px' height='32px'>
          <use href='/icons.svg#icon-closeNewOpt'></use>
        </svg>
      </button>
      <h2 className={css.RegistrationTitle}>Registration</h2>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <input type='text' />
      <input type='email' />
      <input type='password' />
    </div>
  )
}
