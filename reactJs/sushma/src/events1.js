function Events1(){
  function getdata(e,t){
    console.log(e.target.name + "value is : "+e.target.value+" "+t);
  }
  return(
    <div>
      <h1>Input Events</h1>
      <input 
      type="text"
       name="firstname" 
       onChange= {(e)=>getdata(e,"sushma")}
       />

    </div>
  )
}
export default Events1