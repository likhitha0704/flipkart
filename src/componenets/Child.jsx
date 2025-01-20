// import  { Component } from 'react'

// export default class ChildComp extends Component {
//   render() {
//     return (
//       <div>
//         <div id={id}></div>
//       </div>
//     )
//   }
// }


import React from 'react';


export default function Child(props) {
  return (
    <div>
    <div id={props.id}>
    </div>
    </div> 
  );
}



