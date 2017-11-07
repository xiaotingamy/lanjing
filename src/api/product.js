import axios from 'axios'

export function getProductDetail(id) {
  const url = `/rest/product/detail/${id}`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getTradeDetail(tag, data) {
  const url = `/rest/${tag}/trade/detail`
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
