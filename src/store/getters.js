export const productDescription = state => state.productDescription
export const token = state => state.token
export const skuList = state => state.skuList
export const majorImage = state => state.majorImage
export const totalStock = state => state.totalStock
export const price = state => state.price
export const currentIndex = state => state.currentIndex
export const currentSku = (state) => {
  return state.skuList[state.currentIndex] || {}
}
