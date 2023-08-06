import icon from "../img/icon.webp"
import eng from "../img/eng.webp"
import geo from "../img/geo.webp"
import NauCoin from "../img/NauCoin.png"

import {BsList} from "react-icons/bs"
import {CgClose} from "react-icons/cg"

import { useState } from "react"
import useDetectScroll  from "@smakss/react-scroll-direction"
import { Link } from "react-router-dom";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import useWindowDimensions from '../js/useWindowDimensions';

import Nav from "./user/Nav"
import axios from "axios"

const  Header = (props:any) => {

    const [nav, setNav] = useState(false);
    const [scrollDir] = useDetectScroll({});
    const width  = useWindowDimensions().width;
    const options:any = [
      <img src={eng} className="w-6 h-6" alt="eng"/>,
      <img src={geo} className="w-6 h-6" alt="geo"/>
    ]
 
    const path = window.location.pathname
    return (
      <>
        <div className={"flex z-10 top-0 left-0 justify-between items-center w-screen px-4 py-2 text-main bg-bg transition-all"
        + ((scrollDir !== "u" && props.scroll === true) ? " -translate-y-full" : " translate-y-0") + ((props.fixed === true) ? " fixed" : "")} >
          <Link to="/"><div className="flex justify-center items-center hover:scale-110 duration-300">
              <img className="w-10 m-1" src={icon} alt="icon"/>
              <p className="text-2xl  m-1">Nautillus</p>
          </div></Link>

          <div className="mx-4 flex justify-center items-center">
            {(width >= 800) 
            ?
              <>
                <Link to="/"><p className={"mx-2 text-lg link link-underline link-underline-black" + ((path === "/") ? " font-extrabold text-secondary hidden" : "")}>{props.app.langJson.words[props.app.lang].main}</p></Link>
                <Link to="/courses"><p className={"mx-2 text-lg link link-underline link-underline-black" + ((path === "/courses") ? " font-extrabold text-secondary hidden" : "")}>{props.app.langJson.words[props.app.lang].courses}</p></Link>
                <Link to="/pricing"><p className={"mx-2 text-lg link link-underline link-underline-black" + ((path === "/pricing") ? " font-extrabold text-secondary hidden" : "")}>{props.app.langJson.words[props.app.lang].pricing}</p></Link>
                <Link to="/contact"><p className={"mx-2 text-lg link link-underline link-underline-black" + ((path === "/contact") ? " font-extrabold text-secondary hidden" : "")}>{props.app.langJson.words[props.app.lang].contact}</p></Link>
                <Dropdown options={options} onChange={(e:any) => {props.app.setLang(options.indexOf(e.value)); props.app.cookies.set('lang', options.indexOf(e.value), { path: '/' }); window.location.reload()}} placeholder={options[props.app.lang]} />
                
                {props.app.user.isUser 
                  ? 
                  <></>
                  :
                  <Link to="/signin"><button className="bg-main text-black py-1 px-2 rounded-md font-bold ml-6">{props.app.langJson.words[props.app.lang].signIn}</button></Link>
                }

              </>
            :
              <></>
            }
            <BsList className="text-4xl ml-8 hover:text-zinc-400 duration-200" onClick={() => setNav(true)}/>
          </div>
        </div>

        
        <div className={"fixed top-0 right-0 z-20 flex flex-col h-screen w-56  p-4 bg-neutral-900 text-main transition-all" + (nav ? " translate-x-0" : " translate-x-full")}>
          <div className="flex items-center justify-between flex-row">
            <CgClose className="text-3xl hover:text-zinc-400 duration-200" onClick={() => setNav(false)}/>
            <Dropdown options={options} onChange={(e) => {props.app.setLang(options.indexOf(e.value)); props.app.cookies.set('lang', options.indexOf(e.value), { path: '/' }); window.location.reload()}} placeholder={options[props.app.lang]} />
          </div>

          <div className="flex flex-col h-full">
            <div className="flex flex-col justify-center  text-gray-50">
              {props.app.user.isUser
                  ? 
                  <Link to="/user/home" className="my-2" >
                    <div className="flex flex-col justify-center text-main p-2 bg-zinc-700 rounded-lg hover:bg-zinc-800 duration-200 ">
                      <div className="flex flex-row justify-between">
                        <img src={props.app.user.img} className="w-8 h-8 rounded-full" alt="user"/>
                        <div className="flex flex-col justify-between items-center w-full">
                          <div className="flex flex-row justify-around items-center w-full">
                            <p className='text-sm'>{props.app.user.level}</p>
                            <div className='flex flex-row items-center justify-center'>
                              <img src={NauCoin} className="w-4 h-4 mr-1" alt="NauCoin"/>
                              <p className='text-sm'>{props.app.user.nauCoin.toString()}</p>
                            </div>
                          </div>
                          <div className='w-full h-3 px-3'>
                            <div className='w-full h-full bg-bg rounded-full'>
                              <div className='h-full bg-white rounded-full flex items-center justify-center' style={{width : `${props.app.user.XP / 10}%`}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  :
                  <></>
              }

              <Nav app={props.app}/>
              {props.app.user.isUser
                ? 
                  <>
                    <button onClick={async () => {
                      await axios.post(props.app.backendURL + "api/user/auth/logout/blacklist/", {refresh: props.app.cookies.get('refresh')}, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
                      props.app.cookies.set('access', "", { path: '/' })
                      props.app.cookies.set('refresh', "", { path: '/' })
                      location.reload()
                    }} className="bg-main text-black py-2 px-2 rounded-md font-bold my-4 hover:bg-zinc-300 duration-200">Log off</button>
                  </>
                :
                  <div className="flex flex-row justify-evenly my-4">
                    <Link to="/signin"><button className="bg-main text-black py-2 px-2 rounded-md font-bold hover:bg-zinc-300 duration-200">{props.app.langJson.words[props.app.lang].signIn}</button></Link>
                    <Link to="/signup"><button className="bg-main text-black py-2 px-2 rounded-md font-bold hover:bg-zinc-300 duration-200">{props.app.langJson.words[props.app.lang].signUp}</button></Link>
                  </div>
              }
              
            </div>

          </div>
        </div>
      </>
    );
  }
  
export default Header;