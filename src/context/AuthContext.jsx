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
      console.log("👤 Auth state changed. Current user:", currentUser)
      setUser(currentUser)
      setLoading(false)

      if (currentUser) {
        try {
          console.log(
            "🔍 Fetching user document from Firestore:",
            currentUser.uid
          )
          const userDoc = await getDoc(doc(db, "users", currentUser.uid))
          console.log("✅ User document found:", userDoc.data())
          if (userDoc.exists()) {
            setUserName(userDoc.data().name)
          } else {
            console.warn("⚠️ No user document found for UID:", currentUser.uid)
            setUserName("")
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
      console.log("🔥 Registering user:", { name, email, password }) // Log input values
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const newUser = userCredential.user
      console.log("✅ Firebase registration successful! User:", newUser)

      setUser(newUser)

      console.log("📝 Saving user data in Firestore...")
      await setDoc(doc(db, "users", newUser.uid), { name })
      setUserName(name)

      console.log("✅ Firestore data saved successfully!")
    } catch (error) {
      console.error("❌ Registration error:", error.code, "-", error.message)

      // Stop execution if an error occurs
      return
    }
  }

  const login = async (email, password) => {
    try {
      console.log("🔑 Attempting to log in:", email)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const loggedInUser = userCredential.user
      console.log("✅ Login successful! User:", loggedInUser)
      setUser(loggedInUser)

      // ✅ Отримуємо ім'я з Firestore
      console.log("🔍 Fetching user document from Firestore:", loggedInUser.uid)
      const userDoc = await getDoc(doc(db, "users", loggedInUser.uid))
      if (userDoc.exists()) {
        console.log("✅ User document found:", userDoc.data())
        setUserName(userDoc.data().name)
      } else {
        console.warn("⚠️ No user document found for UID:", loggedInUser.uid)
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
