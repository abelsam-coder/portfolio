import axios from 'axios'

const api = axios.create({
       baseURL : 'https://portfolio-dbq5.onrender.com',
       withCredentials : true,
       headers: {
      'Content-Type': 'application/json'
   }
})

export default api
