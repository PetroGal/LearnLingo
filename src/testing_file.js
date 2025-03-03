import { useForm } from "react-hook-form"

export default function RegistrationForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    // Here, you will later integrate Firebase authentication
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input
          type='text'
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </label>

      <label>
        Email:
        <input
          type='email'
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <label>
        Password:
        <input
          type='password'
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>

      <button type='submit'>Register</button>
      <button type='button' onClick={onClose}>
        Close
      </button>
    </form>
  )
}
