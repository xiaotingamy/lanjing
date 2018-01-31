import axios from 'axios'
import {ApiRootUrl} from './config'

export function getGoodDetail(id) {
  const url = `${ApiRootUrl}/goods/detail`
  return axios.get(url, {
    params: {
      id: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getSkuInfo() {
  const url = '/api/skuinfo'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
