import React,{useState} from "react";
import Navbar from './componets/navbar'
import Profile from './componets/profile';
import Skills from './componets/skills';
import Contact from './componets/contact';
import P1 from './componets/p1';
import Icons from './componets/Icons';
import About from './componets/about'
import './App.css'
import Project from './componets/project'




function App() {

const [darkmode, setdarkmode] = useState("dark");

const [text, settext] = useState("white");
const [background, setbackground] = useState("black");

const change_mode=()=>{
     if(darkmode==="dark"){
      setdarkmode("light");
      settext('black');
      setbackground('white');
     }
     else{
      setdarkmode("dark");
      settext('white');
      setbackground('black');
     }
}

  return (
    <div className="App">

<Navbar change_mode={change_mode}  darkmode={darkmode} text={text} background={background} ></Navbar>

<Profile ></Profile>

<Icons></Icons>
<About></About>
<Skills></Skills>

<h1 className='P-Heading'> PROJECT</h1>
<P1></P1>
<Project></Project>

<Contact ></Contact>
    </div>
  );
}

export default App;
