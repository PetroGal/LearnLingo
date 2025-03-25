import { createContext, useContext, useState, useEffect } from "react"
import { auth, db } from "../firebaseConfig.js"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"

const AuthContext = createContext() // ✅ Виправлено з маленької на велику літеру

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      setLoading(false)

      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid))
          if (userDoc.exists()) {
            setUserName(userDoc.data().name)
          }
        } catch (error) {
          console.error("❌ Error fetching user data:", error.message)
        }
      } else {
        setUserName("") // Якщо користувача немає, очищаємо ім'я
      }
    })

    return () => unsubscribe()
  }, [])

  const register = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const newUser = userCredential.user
      setUser(newUser)

      // ✅ Зберігаємо ім'я в Firestore
      await setDoc(doc(db, "users", newUser.uid), { name })

      setUserName(name) // Оновлюємо локальний стан
    } catch (error) {
      console.error("❌ Registration error:", error.message)
    }
  }

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const loggedInUser = userCredential.user
      setUser(loggedInUser)

      // ✅ Отримуємо ім'я з Firestore
      const userDoc = await getDoc(doc(db, "users", loggedInUser.uid))
      if (userDoc.exists()) {
        setUserName(userDoc.data().name)
      } else {
        setUserName("") // Якщо немає запису, очищаємо ім'я
      }
    } catch (error) {
      console.error("❌ Login error:", error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
    setUser(null)
    setUserName("")
  }

  return (
    <AuthContext.Provider
      value={{ user, userName, register, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
