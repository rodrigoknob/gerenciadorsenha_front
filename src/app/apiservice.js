import axios from 'axios'

// backend heroku  'https://geradorsenha-api.herokuapp.com'
// local:  http://localhost:8080 

const httpCliente =  axios.create({
  baseURL: 'http://localhost:8080'
})

class ApiService {

  constructor (apiurl) {
    this.apiurl = apiurl
  }

  post (url, objeto) {
    const requestUrl = `${this.apiurl}${url}`
    return httpCliente.post(requestUrl, objeto)
  }

  put (url, objeto) {
    const requestUrl = `${this.apiurl}${url}`
    return httpCliente.put(requestUrl, objeto)
  }

  delete (url) {
    const requestUrl = `${this.apiurl}${url}`
    return httpCliente.delete(requestUrl)
  }

  get (url) {
    const requestUrl = `${this.apiurl}${url}`
    return httpCliente.get(requestUrl)
  }
}

export default ApiService