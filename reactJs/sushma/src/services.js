// function Services(){
//   return(
//     <div>
//       <h1>This is services component</h1>
//     </div>
//   )
// }
// export default Services

import React, {Component } from 'react'

class Services extends Component{
  render(){
    return(
      <div>
        <h1>This is service page with class{this.props.name}</h1>
      </div>
    )
  }
}
export default Services