export default function RegisterForm({ onClose }) {
  return (
    <div className='auth-form'>
      <button className='close-btn' onClick={onClose}>
        ✖
      </button>
      <h2>Register</h2>
      <form>
        <input type='text' placeholder='Name' required />
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
