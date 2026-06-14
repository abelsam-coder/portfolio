import axios from 'axios'

// Get API base URL from environment variables
// Falls back to localhost for development if not set
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const api = axios.create({
       baseURL: baseURL,
       withCredentials: true,
       headers: {
      'Content-Type': 'application/json'
   }
})

export default api
