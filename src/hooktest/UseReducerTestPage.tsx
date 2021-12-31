// import React, {useReducer, useState} from 'react';
// import {Button} from 'react-native';

// const UseStateTestPage = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const myReducer = (state, action) => {
//     switch(action.type)  {
//       case('countUp'):
//         return  {
//           ...state,
//           count: state.count + 1
//         }
//       default:
//         return  state;
//     }
//   }


//   const handleClick = () => {
//     return setButtonText('Thanks, been clicked!');
//   };

//   return (
//     <Button
//       title={buttonText}
//       onPress={() => {
//         console.log('AAA');
//         setButtonText('Thanks, been clicked!');
//       }}
//       disabled={false}></Button>
//   );
// };

// export default UseStateTestPage;
