import Main from "./components/main/Main";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Course from "./components/course/Course";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";
import Home from "./components/user/home/Home";
import Activation from "./components/Activation";
import Friends from "./components/user/friends/Friends";

import langJson from "./langJson.json";
import Cookies from 'universal-cookie';
import ScrollOnTop from "./js/ScrollOnTop";

const  App = () => {
  const cookies = new Cookies();

  if(cookies.get('lang') == null){
    cookies.set('lang', 0, { path: '/' })
  }

  const [lang, setLang] = useState(cookies.get('lang'))
  const [user, setUser] = useState({
    isUser: true,
    name: "Tengo Lomidze",
    img: "https://yt3.googleusercontent.com/ytc/AL5GRJXpwiOsG3em2ZHbf-AGZ09iQgVGcEKYwdgZ6Ong=s900-c-k-c0x00ffffff-no-rj",
    nauCoin: 182,
    plan: "Free",
    XP: 800,
    level: "Beginner",
  })



  let backendURL = "http://127.0.0.1:8000/"
  

  const app = {lang, setLang, langJson, cookies, backendURL, user, setUser};

  return (
      <BrowserRouter>
      <ScrollOnTop/>
      <Routes>
        <Route path="/user/home" element={<Home app={app}/>}/>
        <Route path="/user/friends" element={<Friends app={app}/>}/>
        <Route path="/user/activation" element={<Activation app={app}/>}/>
        <Route path="/courses/course" element={<Course app={app}/>}/>
        <Route path="/pricing" element={<Pricing app={app}/>}/>
        <Route path="/courses" element={<Courses app={app}/>}/>
        <Route path="/signin" element={<SignIn app={app}/>}/>
        <Route path="/signup" element={<SignUp app={app} />}/>
        <Route path="/" element={<Main app={app}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
