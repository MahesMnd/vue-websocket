import apiClient from './client'

export default {
  async get () {
    console.log('apiclient', apiClient)
    return apiClient.$get('/posts')
  }
}
