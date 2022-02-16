import axios from 'axios'

const mainRequestAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default mainRequestAxios