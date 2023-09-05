import icon from "../img/icon.webp"
import eng from "../img/eng.webp"
import geo from "../img/geo.webp"
import NauCoin from "../img/NauCoin.png"

import {BsList} from "react-icons/bs"
import {CgClose} from "react-icons/cg"
import {AiFillBell} from "react-icons/ai"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import Nav from "./user/Nav"
import axios from "axios"

const Notifications = (props:any) => {
  return (
    <div className="p-2 nots-appear absolute flex items-center justify-start flex-col rounded-xl z-20 top-10 w-64 h-96 bg-bg-3 backdrop-blur-md bg-opacity-80">
    </div>
  )
}


const  Header = (props:any) => {

    const [nav, setNav] = useState(false);
    const [nots, setNots] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const options:any = [
      <img src={eng} className="w-6 h-6" alt="eng"/>,
      <img src={geo} className="w-6 h-6" alt="geo"/>
    ]
    const location = useLocation()
    return (
      <>
        {(scrollPosition > 200) ? <div className="h-20"></div> : null}

        <div className={"flex z-10 h-20 top-0 left-0 justify-between items-center w-screen px-4 py-2 text-main bg-bg transition-all  backdrop-blur-sm bg-bg-1 bg-opacity-40" + ((scrollPosition > 200) ? " fixed header-appear" : " relative")} >
          
        {props.app.user.canUseApp === 1  ? null
          : props.app.user.canUseApp === -1 ?
            <div className="w-full h-full hidden tablet:flex justify-center items-center gap-1 font-alkSanet">
              <Link to="/"><p className={"mx-2 text-lg link link-underline  hover:text-secondary" + ((location.pathname === "/") ? " font-extrabold text-secondary hidden" : "")}>{props.app.langJson.words[props.app.lang].main}</p></Link>
              <Link to="/courses"><p className={"mx-2 text-lg link link-underline  hover:text-secondary" + ((location.pathname === "/courses") ? " font-extrabold text-secondary hidden" : "")}>{props.app.langJson.words[props.app.lang].courses}</p></Link>
              <Link to="/pricing"><p className={"mx-2 text-lg link link-underline  hover:text-secondary" + ((location.pathname === "/pricing") ? " font-extrabold text-secondary hidden" : "")}>{props.app.langJson.words[props.app.lang].pricing}</p></Link>
              <Link to="/contact"><p className={"mx-2 text-lg link link-underline  hover:text-secondary" + ((location.pathname === "/contact") ? " font-extrabold text-secondary hidden" : "")}>{props.app.langJson.words[props.app.lang].contact}</p></Link>
            </div>
          : null
        }
          

           
          
          <div className="w-full h-full flex justify-start tablet:justify-center items-center gap-1">
            <Link to="/">
              <div className="flex justify-center items-center tablet:hover:scale-110 duration-300">
                <img className="w-10 tablet:hover:w-14 duration-200 m-1" src={icon} alt="icon"/>
                <p className="text-2xl m-1 font-bpgESM">{"Nautillus".split("").map((char:string, i:number) => <span className="tablet:hover:text-4xl duration-200 " key={i}>{char}</span>)}</p>
              </div>
            </Link>
          </div>

          
          
          <div className="w-full h-full flex  justify-end tablet:justify-center items-center gap-6">
            <div className="hidden tablet:flex items-center justify-center gap-6">
              {props.app.user.canUseApp === 1  ? null
              : props.app.user.canUseApp === -1 ?
                <>
                  <Dropdown options={options} onChange={(e:any) => {props.app.setLang(options.indexOf(e.value)); props.app.cookies.set('lang', options.indexOf(e.value), { path: '/' }); window.location.reload()}} placeholder={options[props.app.lang]} />
                  <Link to="/signin"><button className="bg-main hover:bg-secondary duration-200 text-sm text-black py-1.5 px-3 rounded-md font-bold">{props.app.langJson.words[props.app.lang].signIn}</button></Link>
                </>
                : null
              }
            </div>
            {props.app.user.isUser 
              ? 
                <div className="flex items-center justify-center gap-4">
                  <Link to="/" className="my-2" >
                    <div className="flex items-center justify-center hover:scale-105 duration-200  hover:text-secondary gap-2">
                      <img src={props.app.user.img} className="w-7 h-7 rounded-full"/> 
                      <p className="text-sm font-bpgESM hidden tablet:block ">{props.app.user.name}</p>
                    </div>
                  </Link>
                  <div className="relative flex items-center justify-center">
                    <button onClick={() => setNots(!nots)} className="text-main text-2xl hover:text-secondary duration-200"><AiFillBell/></button>
                    {nots ? <Notifications/> : null}
                  </div>

                </div>
              : null}

            <BsList className="text-4xl text-center hover:text-secondary duration-200" onClick={() => setNav(true)}/>
          </div>

          
        </div>

        {/* Nav */}

        <div className={"backdrop-blur-sm bg-bg-1 bg-opacity-40 fixed top-0 right-0 z-20 flex flex-col h-screen w-56  p-4 text-main transition-all" + (nav ? " translate-x-0" : " translate-x-full")}>
          <div className="flex items-center justify-between flex-row">
            <CgClose className="text-3xl hover:text-secondary duration-200" onClick={() => setNav(false)}/>
            <Dropdown options={options} onChange={(e) => {props.app.setLang(options.indexOf(e.value)); props.app.cookies.set('lang', options.indexOf(e.value), { path: '/' }); window.location.reload()}} placeholder={options[props.app.lang]} />
          </div>

          <div className="flex flex-col h-full">
            <div className="flex flex-col justify-center  text-gray-50">
              {props.app.user.isUser
                  ? 
                  <Link to="/" className="my-2" >
                    <div className="flex flex-col justify-center text-main p-2 bg-white bg-opacity-10 rounded-lg hover:bg-white hover:bg-opacity-20 duration-200 ">
                      <div className="flex flex-row justify-between">
                        <img src={props.app.user.img} className="w-8 h-8 rounded-full" alt="user"/>
                        <div className="flex flex-col justify-between items-start w-full">
                          <div className="px-2 flex flex-row justify-between items-center w-full">
                            <p className='text-xs text-left bg-'>{props.app.user.name}</p>
                            {/* <div className='flex flex-row items-center justify-center'>
                              <img src={NauCoin} className="w-3 h-3 mr-1" alt="NauCoin"/>
                              <p className='text-xs'>{props.app.user.nauCoin.toString()}</p>
                            </div> */}
                          </div>
                          <div className='w-full h-3 px-2'>
                            <div className='w-full h-full rounded-full bg-bg-2'>
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
                      window.location.reload()
                    }} className="bg-main text-black py-2 px-2 rounded-md font-bold my-4 hover:bg-secondary duration-200">{props.app.langJson.words[props.app.lang].logOff}</button>
                  </>
                :
                  <div className="flex flex-row justify-evenly my-4 gap-2">
                    <Link to="/signin"><button className="bg-main text-xs text-black py-1.5 px-2 rounded-md font-bold hover:bg-secondary duration-200">{props.app.langJson.words[props.app.lang].signIn}</button></Link>
                    <Link to="/signup"><button className="bg-main text-xs text-black py-1.5 px-2 rounded-md font-bold hover:bg-secondary duration-200">{props.app.langJson.words[props.app.lang].signUp}</button></Link>
                  </div>
              }
              
            </div>

          </div>
        </div>
      </>
    );
  }
  
export default Header;