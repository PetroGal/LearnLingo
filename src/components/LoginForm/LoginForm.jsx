export default function LoginForm({ onClose }) {
  return (
    <div className='auth-form'>
      <button className='close-btn' onClick={onClose}>
        ✖
      </button>
      <h2>Login</h2>
      <form>
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}
