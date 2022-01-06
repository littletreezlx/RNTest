const {createReducer} = require('@reduxjs/toolkit');

const initialState = {value: 0};

export function counterReducer(state = initialState, action) {
  console.log("🚀 ~ file: subReducer.js ~ line 6 ~ counterReducer ~ action", action)
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  // 返回原来的 state 不变
  return state;
}
