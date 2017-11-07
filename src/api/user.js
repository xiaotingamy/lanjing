import axios from 'axios'
import md5 from 'md5'
import {ERR_OK} from 'api/config'

function login(data) {
  return axios.post('/rest/login', data).then((res) => {
    return Promise.resolve(res.data)
  })
}
function getCode(data) {
  data = Object.assign({}, data, {
    responseType: 'code',
    redirectUri: 'www.jiayuanbank.com'
  })
  return axios.post('/rest/authorize', data).then((res) => {
    return Promise.resolve(res.data)
  })
}
function getToken(data) {
  data = Object.assign({}, data, {
    grantType: 'authorization_code',
    redirectUri: 'www.jiayuanbank.com'
  })
  return axios.post('/rest/access/token', data).then((res) => {
    return Promise.resolve(res.data)
  })
}
export const localLogin = async function(data) {
  const loginRes = await login(data)
  const userInfo = loginRes.data
  if (loginRes.code !== ERR_OK) {
    return Promise.resolve(loginRes)
  }
  const authorizeRes = await getCode({clientId: userInfo.id})
  if (authorizeRes.code !== ERR_OK) {
    return Promise.resolve(authorizeRes)
  }
  const md5Cellphone = md5(userInfo.cellphone)
  return getToken({
    clientId: userInfo.id,
    clientSecret: md5Cellphone,
    code: authorizeRes.data.code
  })
}
