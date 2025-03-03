import { useForm } from "react-hook-form"

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
      <button></button>
      <h2></h2>
      <p></p>
      <input type='text' />
      <input type='email' />
      <input type='password' />
    </div>

    // <div className='auth-form'>
    //   <h2>Register</h2>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     {/* Email Field */}
    //     <label>Email:</label>
    //     <input
    //       type='email'
    //       {...register("email", { required: "Email is required" })}
    //     />
    //     {errors.email && <p className='error'>{errors.email.message}</p>}

    //     {/* Password Field */}
    //     <label>Password:</label>
    //     <input
    //       type='password'
    //       {...register("password", { required: "Password is required" })}
    //     />
    //     {errors.password && <p className='error'>{errors.password.message}</p>}

    //     {/* Close Button */}
    //     <button type='button' onClick={onClose}>
    //       Cancel
    //     </button>

    //     {/* Submit Button */}
    //     <button type='submit'>Register</button>
    //   </form>
    // </div>
  )
}
