import React ,{useEffect}from 'react';
import history from '../history';
import { getProductList } from '../Redux/Actions';
import { connect } from 'react-redux';
function Products(props) {
  const{productData}=props
  console.log(props)
  
  const renderProductList = () => {
    return productData.map((product, productIndex) => (
      <div
        key={`product-${product.id}-${productIndex}`}
        onClick={() => history.push(`/product/${product.id}`)}
      >
        {product.title}
      </div>
    ))
  }
  return (
    <div>
      Product List
      {renderProductList()}
    </div>
  );
}
const mapStateToProps = (state) => {// lấy state từ store của reducers 
  // chuyển store thành props và sử dụng bình thường 
  console.log("TCL: mapStateToProps -> state", state);
  const { productData } = state.productreducer;// lấy array của productsList tring store
  return {
    productData,
  };

}
const mapDispatchToProps = (dispatch) => { // component gửi dispatch qua action  gửi đi bằng mã type và gói hàng (create(param))
  return {
    getListProduct: (params) => dispatch(getProductList(params)),
    // gửi gói hàng có tên là createTask có dữ liệu trong đó gọi là param



  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
