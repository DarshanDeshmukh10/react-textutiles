import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState} from 'react';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
const[mode,setMode]=useState('light');
const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type});
    setTimeout(()=>{
        setAlert(null);
      },2000)
}
const toggleMode=()=>{
  if(mode==='dark')
  {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title="Textutiles-LightMode";
  }
  else
  {
    setMode('dark');
    document.body.style.backgroundColor='#343a40';
    showAlert("Dark mode has been enabled","success");
    document.title="Textutiles-DarkMode";
    
    setInterval(()=>{
      document.title='Textutiles is amazing';
       }, 1200)
       
    setInterval(()=>{
      document.title='Install Now';
       }, 2000)
  }

}  
return (
      <>
        
        <Navbar title="TextUtiles" about="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <TextForm heading="Enter your text here " mode={mode} showAlert={showAlert}/>      
        </div>
       
        
      </>
       // <About mode={mode}/>
  );
}

export default App;
