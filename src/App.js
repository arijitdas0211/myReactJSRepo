import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import Textutils from './components/TextUtils'
import Alert from './components/Alert'
import {
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("success", "Dark mode has been turned on.")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("danger", "Dark mode has been turned off.")
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (type, messege)=>{
    setAlert({
      msg : messege,
      type : type
    })
    setTimeout(() => {
      setAlert()
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
        <div style={{height: '50px'}}>
          <Alert alert={alert} />
        </div>
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<Textutils mode={mode} title="Enter text to analyze below" />}></Route>
            <Route exact path='/about' element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;