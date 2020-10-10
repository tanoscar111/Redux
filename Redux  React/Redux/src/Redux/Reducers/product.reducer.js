const initialState = {
  productData: [
    {
      id: 1,
      title: "hoc react",
      note: "ahihi"
    },
    {
      id: 2,
      title: "hoc HTML",
      note: "ahihi"
    },
  ],

};

function productReducer(state = initialState, action) {
  console.log("TCL: myReducer -> action", state)
  switch (action.type) {
    case 'GET_PRODUCT_LIST': { //action gửi cái max qua để check
      return {
        ...state,
        productData: [
          ...action.payload,
        ],
      }
    } 
    default: {
      return state;
    }
  }
}

export default productReducer;
