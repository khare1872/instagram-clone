import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  
  return (
    <div className = "App" >
    <div className = "app_header" >
    <img className = "app_headerImage"
    src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    alt="Instagram">
    </img>
    </div>
    <Post username="The Hindu" imageUrl="https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg"/>
    <Post username="Hindutva" imageUrl="https://i.pinimg.com/originals/c4/06/d0/c406d00b34d23555cf8dfc35586505ea.jpg"/>

    </div>
  );
}

export default App;
