
export function isLoggedIn() {
  let token = localStorage.getItem('accessToken')
  if (token) {
    return token
  } else {
    return false
  }
}
