import Student from './student'
function Unls(){
  let students =[{
    name:'sushma',
    rollno:1234
  },
  {
    
    name:'deepika',
    rollno:'9912'
  }
  ]
  return(
    <div>
      <h1>Unorderlist</h1>
      <ul >
        {
          students.map((ele,i,arr) => {
            return (<Student index={i} name={ele.name} rollno={ele.rollno}/>)
          })
        }
      </ul>
    </div>
  )
export default Unls