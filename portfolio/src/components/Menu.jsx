import { Link } from "@mui/material";
import { useState,useEffect } from "react";

const Menu=()=>{
  const[theme,setTheme]=useState('light');
  useEffect(()=>{
    if (theme === 'dark'){
      document.documentElement.classList.remove('dark');
    }
    else{
      document.documentElement.classList.add('dark');
    }
  },[theme]);

  const handleTheme =()=>{
    setTheme(theme === 'dark'?
      'light':'dark');
  };

  return(
    <div className="text-lg tracking-wider translate-x-[180px] leading-10">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/education'>Education</Link></li>
        <li><Link to='/project'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <button className="text-xl font-semibold tracking-widest" onClick={handleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </ul>
    </div>
  )
}
export default Menu