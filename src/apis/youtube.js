import axios from 'axios'

const KEY = 'AIzaSyBsVE1YM_MEu_WzKnITZRnxtjHiXWJtEtU'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
  },
})
