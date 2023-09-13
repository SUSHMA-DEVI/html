function Student(p){
  //let name ='sushma'
  return(
    <>
     
      {/* <tr><td>{p.index+1}</td><td>{p.name }</td><td>{ p.rollno}</td></tr> */}
      <li>{p.name} {p.rollno}</li>
    </>
  )
}
export default Student