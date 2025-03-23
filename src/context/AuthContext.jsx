import { createContext, useContext, useEffect, useState } from "react"
import { auth, db } from "../firebaseConfig.js"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"

const authContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState("") // Додаємо стан для імені
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      setLoading(false)

      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid))
        if (userDoc.exists()) {
          setUserName(userDoc.data().name)
        }
      }
    })
    return () => unsubscribe()
  }, [])

  const register = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user

      // Збереження додаткових даних в Firestore
      await setDoc(doc(db, "users", user.uid), { name, email })
      setUserName(name) // Оновлюємо ім'я користувача в стані

      return userCredential
    } catch (error) {
      console.error("❌ Registration failed:", error.message)
      throw error
    }
  }

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    // Отримання імені з Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid))
    if (userDoc.exists()) {
      setUserName(userDoc.data().name)
    }

    return userCredential
  }

  const logout = async () => {
    await signOut(auth)
    setUserName("") // Очистити ім'я після виходу
  }

  return (
    <authContext.Provider value={{ user, userName, register, login, logout }}>
      {!loading && children}
    </authContext.Provider>
  )
}

export function useAuth() {
  return useContext(authContext)
}
