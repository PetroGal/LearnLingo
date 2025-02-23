import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebaseConfig.js"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"

// 1️⃣ Create a Context for authentication
const AuthContext = createContext()

// 2️⃣ Create AuthProvider component
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // 3️⃣ Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // 4️⃣ Register a new user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // 5️⃣ Log in an existing user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // 6️⃣ Log out the user
  const logout = () => {
    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

// 7️⃣ Custom hook to use authentication
export function useAuth() {
  return useContext(AuthContext)
}

// import { createContext, useContext, useEffect, useState } from "react"
// import { auth } from "../firebaseConfig.js"
// import { onAuthStateChanged, signOut } from "firebase/auth"

// const authContext = createContext()

// export default function AuthProvider({ children }) {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser)
//       setLoading(false)
//     })
//     return () => unsubscribe()
//   }, [])

//   const logout = () => signOut(auth)

//   return (
//     <authContext.Provider value={{ user, loading, logout }}>
//       {children}
//     </authContext.Provider>
//   )
// }

// export function useAuth() {
//   return useContext(authContext)
// }
