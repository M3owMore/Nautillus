import { Link } from "react-router-dom";


import { IoMdSettings } from 'react-icons/io'
import {BsFillPencilFill} from 'react-icons/bs'
import { FaUserCircle, FaDoorOpen } from 'react-icons/fa'
import {AiFillLock} from "react-icons/ai" 

import { useState, useEffect} from 'react';
import axios from "axios";

const Box = (props:any) => {
    return (
        <button onClick={() => {window.location.href = `/courses/course/${props.course.title}`}} className="relative  hover:scale-105 hover:bg-bg-4 duration-200 flex flex-col h-40 w-44 p-2 items-center justify-center bg-bg-3 rounded-xl">
            <p className='text-main  w-full text-center text-md mx-4 font-bold font-bpgESM'>{props.course.title}</p>
            <p className='text-main  w-full text-center text-xs mx-4 font-arialGeo'>{props.app.langJson.words[props.app.lang].level}: {props.course.level}</p>
            <div className="absolute -z-0 top-0 bottom-0 left-0 right-0 bg-cover bg-center blur-sm opacity-30" style={{backgroundImage: `url(/courses/${props.course.title}.webp)`}}></div>

        </button>
    )
}

const Home = (props:any) => {
    const [courses, setCourses] = useState([])
    const [settings, setSettings] = useState(false)

    // relocate if not logined
    useEffect(() => {
        if(props.app.user.canUseApp === -1){
            window.location.href = "/signin"
        }
    }, [props.app.user])

    // get data
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(props.app.backendURL + "api/user/courses/", {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            setCourses(res.data)
        }
        getData();
    }, [])

    return (
        <>
            <div className='absolute top-20 tablet:bottom-0 left-0 right-0 flex flex-col tablet:flex-row'>
                <div className="w-full h-full flex items-center tablet:items-end justify-center flex-col p-4">
                    <div className="bg-bg-2 w-full h-full max-w-md rounded-3xl flex items-center justify-center flex-col gap-4 p-4 shadow-md shadow-gray-800">
                        <div className="flex flex-row items-center justify-around w-full mb-6">
                            <img src={props.app.user.img} className="w-32 h-32 rounded-full"/>
                            <div className="relative flex gap-2">
                                <button onClick={() => setSettings(!settings)} className="flex items-center justify-center gap-2 bg-white hover:bg-secondary duration-200 text-sm text-black rounded-full py-2 px-2  font-bold"><IoMdSettings className="text-3xl"/></button>
                                {settings ?
                                    <div className="fixed tablet:absolute p-4 z-20 left-2 right-2 bottom-8 tablet:bottom-auto tablet:right-auto  tablet:left-16  rounded-xl backdrop-blur-sm tablet:w-64 bg-bg-4 bg-opacity-60 gap-4 flex flex-col">
                                        <Link to={"/user/change/name"}><button className="text-main p-1 bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-25 rounded-md w-full duration-200 flex items-center justify-center gap-2"><BsFillPencilFill className="text-lg"/> Change Name</button></Link>
                                        <Link to={"/user/change/profile"}><button className="text-main p-1 bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-25 rounded-md w-full duration-200 flex items-center justify-center gap-2"><FaUserCircle className="text-lg"/> Change Profile Picture</button></Link>
                                        <Link to={"/user/change/password"}><button className="text-main p-1 bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-25 rounded-md w-full duration-200 flex items-center justify-center gap-2"><AiFillLock className="text-lg"/> Change Password</button></Link>
                                        
                                        <button onClick={async () => {
                                                    await axios.post(props.app.backendURL + "api/user/auth/logout/blacklist/", {refresh: props.app.cookies.get('refresh')}, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
                                                    props.app.cookies.set('access', "", { path: '/' })
                                                    props.app.cookies.set('refresh', "", { path: '/' })
                                                    window.location.reload()
                                                }} 
                                                className="text-main p-1 bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-25 rounded-md w-full duration-200 flex items-center justify-center gap-2"><FaDoorOpen className="text-lg"/> Log Off</button>

                                    </div>
                                : null}
                                
                            </div>
                        </div>
                        <div className="w-full flex items-center  justify-between">
                            <p className="text-main font-bpgESM text-2xl">{props.app.user.isUser ? props.app.user.name.split("").map((char:string, i:number) => <span className="tablet:hover:text-4xl tablet:hover:text-secondary duration-200 " key={i}>{char}</span>) : null}</p>
                            <div className="flex justify-center items-center gap-2">
                                {/*
                                <img src={NauCoin} className="w-8 h-8 rounded-full"/>
                                <p className="text-main font-bpgESM text-xl">{props.app.user.nauCoin}</p>
                                */}
                            <p className="text-main text-sm text-right w-full"><span className="text-secondary">{props.app.user.XP} XP</span> / 1000 XP</p>
                                
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full h-4 bg-bg-3 rounded-full flex justify-start items-center ">
                                <div className="h-full bg-white w-10 rounded-full" style={{width: props.app.user.XP / 10 + "%"}}>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex w-full flex-col tablet:flex-row gap-2 items-center justify-around">
                            <div className="flex items-center gap-2">
                                <button className="py-1 px-3 text-main font-arialGeo bg-bg-4 rounded-md bg-opacity-60 duration-200 hover:bg-opacity-100">Friends</button>
                                <button className="py-1 px-3 text-main font-arialGeo bg-bg-4 rounded-md bg-opacity-60 duration-200 hover:bg-opacity-100">Requests</button>
                            </div>
                            
                            <button className="py-1 px-3 text-main font-arialGeo bg-bg-4 rounded-md bg-opacity-60 duration-200 hover:bg-opacity-100">Search Users</button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex items-center tablet:items-start justify-center flex-col p-4 gap-4">
                    <div className="w-full h-full bg-bg-2 rounded-xl max-w-md flex items-center justify-start flex-col p-4 shadow-md shadow-gray-800">
                        <p className="text-main text-2xl font-alkSanet w-full  text-left">{props.app.langJson.words[props.app.lang].courses}</p>
                        <div className="overflow-x-auto h-full w-full py-2">
                            <div className="h-full flex items-center gap-2">
                                {courses.map((course:object, i:number) =>                             
                                    <Box course={course} key={i} app={props.app}/>
                                )}
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-full h-full bg-bg-2 rounded-xl max-w-md flex items-center justify-start flex-col p-4 shadow-md shadow-gray-800">
                        <p className="text-main text-2xl font-alkSanet w-full text-left"></p>
                    </div>
                </div>
            </div>
        </>
    );
  }

  export default Home;