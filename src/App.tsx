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
import Messages from "./components/user/friends/Messages";
//import Groups from "./components/user/groups/Groups";
import Contact from "./components/Contact";
import CourseInfo from "./components/CourseInfo";
import Header from "./components/Header";
import ResetPassword from "./components/ResetPassword";
import User from "./components/user/user/User";
import ChangePassword from "./components/user/ChangePassword";
import ChangeUsername from "./components/user/ChangeUsername";
import ChangeProfilePicture from "./components/user/ChangeProfilePicture";
import ChangeEmail from "./components/user/ChangeEmail";
import Friends from "./components/user/Friends";
import FriendRequests from "./components/user/FriendRequests";
import SearchUsers from "./components/user/SearchUsers";
import PayPalExecutePayment from "./components/PayPalExecutePayment";

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
    canUseApp: 0
  })



  const backendURL = "http://127.0.0.1:8000/"
  
  const updateToken = async (getData:boolean) => {
    console.log("Access token is updating...")
    if(cookies.get('refresh') !== undefined && cookies.get('refresh') !== ""){
      await axios.post(backendURL + "api/user/auth/jwt/refresh", {refresh: cookies.get('refresh')})
      .then((res:any) => {
        cookies.set('access', res.data.access, { path: '/' })
        if(getData){
          getUserInfo()
        }
        console.log("Access token is updated!")
      })
      .catch(() => {
        setUser({
          isUser: false,
          canUseApp: -1
        })
        cookies.set('access', "", { path: '/' })
        cookies.set('refresh', "", { path: '/' })
      })
    }else{
      setUser({
        isUser: false,
        canUseApp: -1
      })
    }
  };
  const getUserInfo = async () => {
    if(cookies.get('access') !== undefined && cookies.get('access') !== ""){
      await axios.get(backendURL + "api/user/auth/users/me/", {headers: {Authorization: 'Bearer ' + cookies.get('access')}})
        .then((res:any) => {
          setUser({
            isUser: true,
            canUseApp: 1,
            name: res.data.user_name,
            img: `/userImages/${res.data.profile_picture}.webp`,
            plan: "Free",
            XP: 800,
            level: "Beginner",
          })
        })
        .catch(() => {
          updateToken(true)
        })
    }else{
      updateToken(false)
    }
  }
  useEffect(() => {
    updateToken(true)
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateToken, 180000, false);
    return () => clearInterval(intervalId);
  }, []); 

  const app = {lang, setLang, langJson, cookies, backendURL, user, setUser};

  return (
    <BrowserRouter>
      <Header app={app}/>
      <ScrollOnTop/>
      <Routes>
        
        {/*<Route path="/user/home" element={<Home app={app}/>}/>*/}
        <Route path="/user/messages" element={<Messages app={app}/>}/>
        {/*<Route path="/user/groups" element={<Groups app={app}/>}/>*/}
        <Route path="/user/activation" element={<Activation app={app}/>}/>
        <Route path="/user/forgotpass" element={<ResetPassword app={app}/>}/>
        <Route path="/user/change/password" element={<ChangePassword app={app}/>}/>
        <Route path="/user/change/name" element={<ChangeUsername app={app}/>}/>
        <Route path="/user/change/profile" element={<ChangeProfilePicture app={app}/>}/>
        <Route path="/user/change/email" element={<ChangeEmail app={app}/>}/>
        <Route path="/user/friends" element={<Friends app={app}/>}/>
        <Route path="/user/friends/requests" element={<FriendRequests app={app}/>}/>

        
        <Route path="/users/find" element={<SearchUsers app={app}/>}/>
        <Route path="/users/user/:name" element={<User app={app}/>}/>

        <Route path="/courses/course/:name" element={<Course app={app}/>}/>
        <Route path="/courses/info/:name" element={<CourseInfo app={app}/>}/>

        <Route path="/payment/execute/:token" element={<PayPalExecutePayment app={app}/>}/>


        <Route path="/courses" element={<Courses app={app}/>}/>
        <Route path="/pricing" element={<Pricing app={app}/>}/>
        <Route path="/contact" element={<Contact app={app}/>}/>

        <Route path="/signin" element={<SignIn app={app}/>}/>
        <Route path="/signup" element={<SignUp app={app} />}/>
        {user.canUseApp === 1 ? <Route path="/" element={<Home app={app}/>}/> : user.canUseApp === -1 ? <Route path="/" element={<Main app={app}/>}/> : null }
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;