
  
function Events()
{
  function getdata(name)
  {
    alert("Name is : "+ name);
  }
  let arr=[10,20,30];
  let trainess=[
    {
      name:'sushma',
      rollno:9912
    },
    {
      name:'deepika',
      rollno:1234
    },
  ];
  function getdata(res){
    //console.log(res);
    //document.write(res)
    res.map((ele,i) => {
      document.write(i+1 + "."+ele.name+"."+ele.rollno+"<br/>")
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
  
export default Events;


// import React from 'react';

// class NameAlert extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'sushma', // Set the default name here
//     };
//   }

//   showAlert = () => {
//     // Use the alert function to display the name
//     alert('Name is, ' + this.state.name + '!');
//   };

//   render() {
//     return (
//       <div>
//         <h1>Display Name in Alert Box</h1>
//         <button onClick={this.showAlert}>Click Here</button>
//       </div>
//     );
//   }
// }

// export default NameAlert;





// import React from 'react';

// function showNameInAlert() {
//   const name = 'John'; // Replace with the name you want to display
//   alert('Hello, ' + name + '!');
// }

// function App() {
//   return (
//     <div>
//       <h1>React Name Alert</h1>
//       <button onClick={showNameInAlert}>Show Name</button>
//     </div>
//   );
// }

// export default App;

