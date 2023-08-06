import Main from "./components/main/Main";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Course from "./components/course/Course";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";
import Home from "./components/user/home/Home";
import Activation from "./components/Activation";
import Friends from "./components/user/friends/Friends";
import Groups from "./components/user/groups/Groups";
import Contact from "./components/Contact";
import CourseInfo from "./components/CourseInfo";

import langJson from "./langJson.json";
import Cookies from 'universal-cookie';
import ScrollOnTop from "./js/ScrollOnTop";
import axios from "axios";

const  App = () => {
  const cookies = new Cookies();

  if(cookies.get('lang') == null){
    cookies.set('lang', 0, { path: '/' })
  }

  const [lang, setLang] = useState(cookies.get('lang'))
  const [user, setUser]:any = useState({
    isUser: false,

    img: "https://icon-library.com/images/default-user-icon/default-user-icon-9.jpg",
    nauCoin: 182,
    plan: "Free",
    XP: 800,
    level: "Beginner",
  })



  let backendURL = "http://127.0.0.1:8000/"
  
 

  useEffect(() => {
    if(cookies.get('access') !== undefined && cookies.get('access') !== ""){
      axios.get(backendURL + "api/user/auth/users/me/", {headers: {Authorization: 'Bearer ' + cookies.get('access')}})
      
        .then((res:any) => {
          setUser({
            isUser: true,
            name: res.data.user_name,
            img: "https://icon-library.com/images/default-user-icon/default-user-icon-9.jpg",
            nauCoin: 182,
            plan: "Free",
            XP: 800,
            level: "Beginner",
          })
        })
        .catch(err => console.log(err))
    } 
  }, []);

  useEffect(() => {
    const updateToken = async () => {
      if(cookies.get('refresh') !== undefined && cookies.get('refresh') !== ""){
        const res = await axios.post(backendURL + "api/user/auth/jwt/refresh", {refresh: cookies.get('refresh')})
        cookies.set('access', res.data.access, { path: '/' })
      }
    };
    updateToken()
    const intervalId = setInterval(updateToken, 180000);
    return () => clearInterval(intervalId);
  }, []); 

  const app = {lang, setLang, langJson, cookies, backendURL, user, setUser};

  return (
      <BrowserRouter>
      <ScrollOnTop/>
      <Routes>
        <Route path="/user/home" element={<Home app={app}/>}/>
        <Route path="/user/friends" element={<Friends app={app}/>}/>
        <Route path="/user/groups" element={<Groups app={app}/>}/>
        <Route path="/user/activation" element={<Activation app={app}/>}/>
        <Route path="/courses/course" element={<Course app={app}/>}/>
        <Route path="/courses/info" element={<CourseInfo app={app}/>}/>
        <Route path="/courses" element={<Courses app={app}/>}/>
        <Route path="/pricing" element={<Pricing app={app}/>}/>
        <Route path="/contact" element={<Contact app={app}/>}/>
        <Route path="/signin" element={<SignIn app={app}/>}/>
        <Route path="/signup" element={<SignUp app={app} />}/>
        <Route path="/" element={<Main app={app}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;