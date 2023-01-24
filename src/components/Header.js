import icon from "../img/icon.png"
import {BsList} from "react-icons/bs"
import {CgClose} from "react-icons/cg"
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import {MdOutlinePlayLesson} from "react-icons/md"
import {TbZoomMoney} from "react-icons/tb"

import { useState } from "react"
import { useDetectScroll } from "@smakss/react-scroll-direction"
import { Outlet, Link } from "react-router-dom";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const  Header = (props) => {

    const [nav, setNav] = useState(false);
    const [scrollDir] = useDetectScroll({});

    const options = props.app.langJson.languages
    const defaultOption = options[props.lang];
    
    return (
      <>
        <div className={"flex z-10 top-0 left-0 justify-between items-center w-screen px-4 py-2 text-main bg-bg transition-all"
        + ((scrollDir != "up" && props.scroll === true) ? " -translate-y-full" : " translate-y-0") + ((props.fixed === true) ? " fixed" : "")} >
          <Link to="/"><div className="flex justify-center items-center">
              <img className="w-12 m-2" src={icon} alt="icon"/>
              <p className="text-2xl  m-2">Nautillus</p>
          </div></Link>

          <div className="m-2 flex justify-center items-center">
            <BsList className="text-5xl" onClick={() => setNav(true)}/>
          </div>
        </div>

        
        <div className={"fixed top-0 right-0 z-20 flex flex-col h-screen w-80 p-4 bg-neutral-900 text-main transition-all" + (nav ? " translate-x-0" : " translate-x-full")}>
          <div className="flex items-center justify-between flex-row">
            <CgClose className="text-5xl" onClick={() => setNav(false)}/>
            <Dropdown options={options} onChange={(e) => {props.app.setLang(options.indexOf(e.value)); props.app.cookies.set('lang', options.indexOf(e.value), { path: '/' }); window.location.reload(true)}}  value={defaultOption} placeholder="Languages" />
          </div>

          <div className="flex flex-col h-full p-3">
            <Link to="/"><div className="flex flex-rew justify-between py-4">
              <p className="text-2xl">{props.app.langJson.words[props.app.lang].main}</p>
              <AiOutlineHome className="text-3xl"/>
            </div></Link>
            <Link to="/courses"><div className="flex flex-rew justify-between py-4">
              <p className="text-2xl">{props.app.langJson.words[props.app.lang].courses}</p>
              <MdOutlinePlayLesson className="text-3xl"/>
            </div></Link>
            <Link to="/pricing"><div className="flex flex-rew justify-between py-4">
              <p className="text-2xl">{props.app.langJson.words[props.app.lang].pricing}</p>
              <TbZoomMoney className="text-3xl"/>
            </div></Link>
            <div className="flex flex-rew justify-between py-4">
              <p className="text-2xl">{props.app.langJson.words[props.app.lang].contact}</p>
              <AiOutlineMail className="text-3xl"/>
            </div>
            
            <div className="flex justify-evenly my-16 text-gray-50">
              <Link to="/signin"><button className="bg-main text-black py-2 px-2 rounded-md font-bold">{props.app.langJson.words[props.app.lang].signIn}</button></Link>
              <Link to="/signup"><button className="bg-main text-black py-2 px-2 rounded-md font-bold">{props.app.langJson.words[props.app.lang].signUp}</button></Link>
            </div>

          </div>
        </div>
      </>
    );
  }
  
export default Header;