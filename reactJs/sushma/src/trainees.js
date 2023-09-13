import Student from './student';

function Trainees(){
  let students =[{

    name:'sushma',
    rollno:1234
  },
  {
    
    name:'deepika',
    rollno:'9912'
  }
  ]
  return (
    <div className='App'>
      <h1>Trainees List</h1>
      
      {/* <Student name="sushma" rollno="1234"/>
      <Student name="deepika" rollno="4567"/>
      <Student name="devi" rollno="9912"/> */}
      {/* {
      
        students.map((ele,i,arr) => {
          return (<Student name={ele.name} rollno={ele.rollno}/>)
        })
      } */}
      {/* <table  cellSpacing={0} align='center'> */}
        
      {/* <tr><th>s.no</th><th>name</th><th>rollno</th></tr> */}
      <ul >
      {

      
      students.map((ele,i,arr) => {
        return (<Student index={i} name={ele.name} rollno={ele.rollno}/>)
      })
    }
    </ul>
      {/* </table> */}
      

    </div>

  )
}
export default Trainees