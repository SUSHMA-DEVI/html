import logo from './logo.svg';
import './App.css';
// import Home from './Home';
// import About from './About';
// import Services from './services'
 import Menu from './menu';
// import Contact from './contact'
//import Student from './student'
//import Trainees from './trainees'
// import {persons,a} from './Person';
// import Events from './events'
// import Events1 from './events1'
// import Trainees1 from './trainees1';
import Button from './button';
import Button1 from './button1';
import Button2 from './button2';
import Products1 from './products';
import Newproducts from './newproduct';
//import Hooks from './hooks';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App(){
  return(
    <div className='App'>
    <BrowserRouter>
    <Menu/>
      <Routes>
        {/* <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path='/services' element={<Services name="sushma"/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route> */}
        {/* <Route path='/student' element={<Student/>}></Route> */}
        {/* <Route path='/trainees' element={<Trainees/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
        <Route path='/events1' element={<Events1/>}></Route>
        <Route path='/trainees1' element={<Trainees1/>}></Route> */}
        <Route path='/button' element={<Button/>}></Route>
        <Route path='/button1' element={<Button1/>}></Route>
        <Route path='/button2' element={<Button2/>}></Route>
        <Route path='/products' element={<Products1/>}></Route>
        
        {/* <Route path='/hooks' element={<Hooks/>}></Route> */}

      </Routes>
  </BrowserRouter>
</div>
  )
}
export default App;


// function App() {
//   console.log(persons)
//   console.log(a)
//   return(
//     <div>
//       {/*<h1> this is first app page</h1>*/}
//       <Home />
//       <persons />


//     </div>
//   )
// }
// export default App;

// //   return (
// //     <div>
// //       {/*<h1> this is first app page</h1>*/}
// //       <Home />
// //     </div>
// //   )
// // }

// // export default App;
