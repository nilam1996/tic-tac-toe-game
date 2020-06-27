import React from 'react'
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
        {/* console.log(value,"iyuyueyuweyuewyu") */}
      </button>
    );
  }
  
  export default Square;





































// import React from "react"
// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           value: "",
//         };
//       }

//     render() {
        
//       return (
//     <button 

    
//     className="square"
         
//           onClick={()=>this.setState({value:'x'})}
//           >
//                {/* {this.state.value} */}
//                {this.state.value}
          
         
         
//         </button>

       
        
//       );
//     }
//   }
//   export default Square;