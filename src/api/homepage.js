import axios from 'axios'
import {ApiRootUrl} from './config'

export function getIndexData() {
  const url = `${ApiRootUrl}/index/index`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
