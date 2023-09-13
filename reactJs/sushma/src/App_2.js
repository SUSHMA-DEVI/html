import logo from './logo.svg';
import './App.css';
import Home from './Home';
//import About from './About';
import {persons,a} from './Person';

function App() {
  console.log(persons)
  console.log(a)
  return(
    <div>
      {/*<h1> this is first app page</h1>*/}
      <Home />
      <persons />


    </div>
  )
}
export default App;

//   return (
//     <div>
//       {/*<h1> this is first app page</h1>*/}
//       <Home />
//     </div>
//   )
// }

// export default App;
