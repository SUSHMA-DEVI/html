import {useState} from "react"
function Hooks(){
  // let cnt=1
  // const getcount=(count)=>{
  //   cnt=++count
  //   console.log(cnt)
  // }
  //const [cnt,setCnt] = useState(0)
  // const[name,setName] = useState('')
  // const initialNames=['apple','banana','apple','papaya','grape','orange','orange']
  // const [names,setNames]=useState(initialNames)
  // const[filterText,setFilterText] = useState('')
  // const handleFilter=()=>{
  //   const filterdNames = initialNames.filter(name=>name.toLowerCase().includes(filterText.toLowerCase())
  //   );
  //   setNames(filterdNames);
  // };
  const[arr,setArr]=useState(['apple','banana','apple','papaya'])
  const[fruitName,setFruitName]=useState('')
  const filterFruits=(){
    console.log(fruitName)
    console.log(arr)
    let output =arr.filter((ele,i)=>{
      return(ele === fruitName)
    })
  }
  return(
    <div>
      {/* <h1>React Hooks</h1>
      <p>Count is: {cnt}</p>
      <button onClick={() =>setCnt(cnt+1)}>Count</button>
      <br/>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
      <h2>Name is: {name}</h2> */}
      {/* <input type="text" onChange={(e)=> setFilterText(e.target.value)}/>
      <button onClick={handleFilter}>Find</button>
      <br/>
      <ul style={{'display':'inline-block'}}>
        {
          names.map((name,index)=>(
            <li key={index}>{name}</li>

          ))
        }
      </ul> */}
      <input type="text" onChange={(e)=>setFruitName(e.target.value)} />
      <button onClick={filterFruits}>find</button>


    </div>
  )
}
export default Hooks