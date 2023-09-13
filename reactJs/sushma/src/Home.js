// function Home() {
//   return (
//     <div>
//       <img src={require("./aditya1.jpg")} alt="images" />
//     </div>
//   );
// }
// export default Home


function Home(){
  let ss={
    background:'red',
    color:'green',
    fontSize:'50px'
  }
  return(
    <div style={ss}>
      <h1>This is home component</h1>
    </div>
  )
}
export default Home