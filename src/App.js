import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'
import{
  BrowserRouter as Router,
  Route,
  Routes,
  Link
}from "react-router-dom";
let name = "Piyush";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( () =>{
      setAlert(null);
    },1500);
  }
  let toggleMode = ()=>{
    if(mode === 'light' || mode === 'danger' || mode === 'warning' || mode === 'success'){
      setMode('dark');
      document.body.style.backgroundColor = '#3d3d3d';
      showAlert("Dark Mode Enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled' , 'success');
    }
  }
  let toggleColorRed = ()=>{
    if(mode === 'danger'){
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'white';
      setMode('light');
    }
    else{
      document.body.style.backgroundColor = '#821e28';
      document.body.style.color = 'white';
      setMode('danger');
    }
  }
  let toggleColorYellow = () =>{
    if(mode === 'warning'){
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'white';
      setMode('light');
    }
    else{
      document.body.style.backgroundColor = '#6b4f02';
      setMode('warning');
    }
  }
  let toggleColorGreen = () =>{
    if(mode === 'success'){
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'white';
      setMode('light');
    }
    else{
      document.body.style.backgroundColor = '#023d08';
      setMode('success');
    }
  }
  return (
    <>
{/* <Navbar title="TextUtils" aboutText="About Us" /> */}
<Alert alert = {alert}/>
<Router>
<Navbar title='TextUtils' mode = {mode} toggleMode = {toggleMode} toggleColorRed = {toggleColorRed} toggleColorGreen = {toggleColorGreen} toggleColorYellow = {toggleColorYellow}/>
<div className="container">
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
</Router>

    </>
  );
}

export default App;
