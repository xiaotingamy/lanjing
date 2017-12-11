import axios from 'axios'

export function getGoodDetail(id) {
  const url = `/rest/product/detail/${id}`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
