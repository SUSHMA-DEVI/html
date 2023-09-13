// function Trainess1(){
//   function getdata(name){
//     alert("name is :" +name)
//   }
//   let students =[{

//     name:'sushma',
//     rollno:1234
//   },
//   {
    
//     name:'deepika',
//     rollno:'9912'
//   },
//   ];
//   function getdata(res){
//     res.map((ele,i)=>{
//       document.write(i+1 + "." +ele.name + "." + ele.rollno + ".")
//     });
//   }
//   return(
//     <div>
//       <h1></h1>
//       <button onClick={()=>getdata(Trainess1)}>click here</button>
//     </div>

//   )
// }
// export default Trainess1


// import Student from "./student"
// function Trainees1(){
//     let products =[{
//         product:'Ponds',
//         cost:1234
//     },
//     {
//         product:'Nivea',
//         cost:1234
//     }]
//     return(
//         <div>
//             <h1>Trainees List</h1>
//             {/* <Student n1 = "sree" cost ="1234" /> */}
//             {/* <table border={1}>
//                 <tr><th>S.no</th><th>Name</th><th>Rollno</th></tr>
//             {
//                 students.map((ele,i,arr)=>{
//                     return (<Student index={i} Product={ele.Product} cost={ele.cost}/>)
//                 })
//             }
//             </table> */}
//             {
//                 products.map((ele,i,arr)=>{
//                     return (<Student index={i} product={ele.product} cost={ele.cost}/>)
//                 })
//             }
//         </div>
//     )
// }
// export default Trainees1



function Trainess1()
{
  function getdata(name)
  {
    alert("Name is : "+ name);
  }
  let arr=[10,20,30];
  let trainess=[
    {
      product:'KIA',
      color:'grey',
      cost:'20L'
    },
    {
      product:'Swift',
      color:'white',
      cost:'15L'
    },
  ];
  function getdata(res){
    //console.log(res);
    //document.write(res)
    res.map((ele,i) => {
      document.write(i+1 + "."+ele.product+"."+ele.color+"."+ele.cost+"<br/>")
    });
  }
  return(
    <div>
      <h1>this is events component</h1>
      {/* {trainess.map((trainee, index) => (
        <button key={index} onClick={() => getdata(trainee.name)}>Click here for {trainee.name}</button>
      ))} */}
      <button onClick={()=>getdata(trainess)}>click here</button>
    </div>
  );
}
  
export default Trainess1;