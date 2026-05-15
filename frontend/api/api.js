import axios from 'axios'

const api = axios.create({
       baseURL : 'https://portfolio-dbq5.onrender.com',
       withCredentials : true
})

export default api
