import logo from './logo.svg';
import AuthorizationPage from "./pages/AuthorizationPage";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom"
// import AddParametr from "./pages/AddParametr";

import './scss/App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );


  return (
    // <div className="container">
		// <h1>Генератор комбинационных схем</h1>
		<Routes>
			<Route path="/" element={<AuthorizationPage/>} />
			<Route path="/main" element={<MainPage/>}/>
		</Routes>
    // </div>
  );
}

export default App;
