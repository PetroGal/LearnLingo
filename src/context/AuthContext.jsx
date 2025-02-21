import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebaseConfig.js"
import { onAuthStateChanged, signOut } from "firebase/auth"

const authContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const logout = () => signOut(auth)

  return (
    <authContext.Provider value={{ user, loading, logout }}>
      {children}
    </authContext.Provider>
  )
}

export function useAuth() {
  return useContext(authContext)
}
