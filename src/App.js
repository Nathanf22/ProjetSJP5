// import logo from './logo.svg';
import './App.css';
import Box1 from './Components/Box1';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>hello word</p>
//       </header>
     
//     </div>
//   );


// }

// function Welcome(props){
//   return <h1>You are Welcome {props.name}</h1>;
// }

// const element = <div tabIndex="0"></div>;
function App(){
 const box1 = <Box1/> 
  return(
    <div>
      {box1}
      {/* <Translate val="<<" box1={box1} box2 ={box2}></Translate>
      <br/>
      <Translate val=">>"></Translate>
      <hr/>
      {box2} */}
    </div>
  );
}





export default App;
// export default Welcome;
// export default App;


