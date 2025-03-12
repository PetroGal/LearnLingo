import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebaseConfig.js"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"

const authContext = createContext()

export default function AuthProvider({ children }) {
  console.log("AuthProvider children:", children)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  return (
    <authContext.Provider value={{ user, register, login, logout }}>
      {!loading && children}
    </authContext.Provider>
  )
}

export function useAuth() {
  return useContext(authContext)
}
