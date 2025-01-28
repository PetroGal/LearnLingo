import axios from "axios"
import { databaseURL } from "../firebaseConfig.js"

const axiosInstance = axios.create({
  baseURL: databaseURL,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance
