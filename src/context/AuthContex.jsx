import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../utils/firebaseConfig.js" // Import Firebase Auth instance
import { onAuthStateChanged, signOut } from "firebase/auth"

// 1️⃣ Create Context
const authContext = createContext()

// 2️⃣ Create Provider Component
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe() // Cleanup on unmount
  }, [])

  // Function to log out the user
  const logout = () => signOut(auth)

  return (
    <authContext.Provider value={{ user, loading, logout }}>
      {children}
    </authContext.Provider>
  )
}

// 3️⃣ Custom Hook to Access Context Easily
export function useAuth() {
  return useContext(AuthContext)
}
