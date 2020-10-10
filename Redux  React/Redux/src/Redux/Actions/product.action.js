export function getProductList(params) {
  //action 1
  return {
    type: 'GET_PRODUCT_LIST',
    payload: params,
  }
}