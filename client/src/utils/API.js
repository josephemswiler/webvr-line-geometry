import axios from 'axios'

export default {
  getProjects: function () {
    return axios.get('/api/projects')
  },
  getProject: function (id) {
    return axios.get('/api/projects/' + id)
  }
}
