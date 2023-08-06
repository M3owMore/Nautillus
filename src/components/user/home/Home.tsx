import NauCoin from "../../../img/NauCoin.png"
import { Link } from "react-router-dom";

import { AiFillClockCircle, AiFillBook } from 'react-icons/ai';

import { useState, useEffect} from 'react';
import axios from "axios";
import Header from '../../Header';

const Box = (props:any) => {
    return (
        <button onClick={() => {window.location.href = `/courses/course?course=${props.course.title}`}} className="mx-2 flex flex-col w-48 h-full justify-evenly items-center bg-neutral-800 rounded-xl p-1">
            <p className='text-main text-lg mx-4'>{props.course.title}</p>
            <p className='text-main text-sm mx-4'>Level: {props.course.level}</p>
            <img src="https://play-lh.googleusercontent.com/xfEwmzQADrjODuFw94jDJpcUM2f15a9wKvzOExZ8hH7zvYaNpXUzH-fcbAp3RTrPs18" className="object-contain w-24 h-24" alt="course"/>
        </button>
    )
}

const Home = (props:any) => {
    const [cousesWindow, setCoursesWindow] = useState(0)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(props.app.backendURL + "api/user/auth/users/courses/", {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            setCourses(res.data)
        }
        getData();
    }, [])

    return (
        <div className='w-screen h-screen flex flex-col'>
            <Header app={props.app} scroll = {false} fixed={false}/>
            <div className='w-full h-full flex flex-row'>

                <div className={'w-full h-full flex flex-col'}>
                    <div className='flex flex-row p-1 h-64'>
                         <div className='bg-neutral-900 h-full w-full m-2 rounded-xl p-4 text-main'>
                            <div className='flex flex-row justify-start items-center h-1/2'>
                                <img src={props.app.user.img} className="w-16 h-16 rounded-full mr-4" alt="user"/>
                                {props.app.user.isUser ? 
                                <div className='w-full'>
                                    <div className='flex flex-row w-full justify-around items-center mb-1'>
                                        <p className='text-md mx-3 my-2'>{props.app.user.level}</p>
                                        <div className='flex flex-row items-center justify-center'>
                                            <img src={NauCoin} className="w-6 h-6 mr-1" alt="NauCoin"/>
                                            <p className='text-lg'>{props.app.user.nauCoin}</p>
                                        </div>
                                    </div>
                                    <div className=' w-full h-5 bg-bg rounded-full'>
                                        <div className='h-full bg-white rounded-full flex items-center justify-center' style={{width : `${props.app.user.XP / 10}%`}}>
                                            <p className='text-black text-md'>XP {props.app.user.XP}</p>
                                        </div>
                                    </div>
                                </div>
                                : null }
                            </div> 
                            {props.app.user.isUser ? 
                            <div className='flex flex-row w-full h-1/2'>
                                <div className='w-full flex items-center justify-start'>
                                    <p className='text-lg mx-3 '>{props.app.user.name}</p>
                                </div>
                                <div className='flex flex-row items-center justify-end mt-2 p-5 w-full h-full'>
                                    <p className='text-main text-md mx-4'>Plan: {props.app.user.plan}</p>
                                    <Link to="/pricing"><button className="bg-main text-black py-1 px-1 rounded-md font-bold">Upgrade Plan</button></Link>
                                </div>
                            </div>
                            : null}
                         </div>
                    </div>
                    {props.app.user.isUser ? 
                        <div className="h-full w-full flex flex-col px-4 py-6">
                            <div className="h-10 w-full text-main flex flex-row items-center justify-start">
                                <div onClick={() => {setCoursesWindow(0)}} className={"w-10 h-full  rounded-t-xl flex justify-center items-center" + ((cousesWindow === 0) ? " bg-neutral-900" : "")}>
                                    <AiFillClockCircle className=" text-2xl"/>
                                </div>

                                <div onClick={() => {setCoursesWindow(1)}} className={"w-10 h-full  rounded-t-xl flex justify-center items-center" + ((cousesWindow === 1) ? " bg-neutral-900" : "")}> 
                                    <AiFillBook className=" text-2xl"/>
                                </div>
                            </div>


                            <div className="h-full w-full text-main flex items-center justify-center bg-neutral-900 rounded-b-xl">
                                {(cousesWindow === 0) ? 
                                    <div className="flex flex-row overflow-x-scroll w-full h-full p-2">
                                        <div className="flex flex-row w-min-full h-full">
                                            {courses.map((course:object, i:number) => 
                                                <Box course={course} key={i}/>
                                            )}
                                        </div>
                                    </div>
                                :
                                <div className="flex flex-row overflow-x-scroll w-full h-full p-2">
                                <div className="flex flex-row w-min-full h-full">
                                    <div className="mx-2 flex flex-col w-48 h-full justify-evenly items-center bg-neutral-800 rounded-xl p-1">
                                        <p className='text-main text-lg mx-4'>Nmap</p>
                                        <img src="https://play-lh.googleusercontent.com/xfEwmzQADrjODuFw94jDJpcUM2f15a9wKvzOExZ8hH7zvYaNpXUzH-fcbAp3RTrPs18" className="object-contain w-24 h-24" alt="course"/>
                                    </div>
                                </div>
                            </div>
                                }
                            </div>
                        </div>
                    : null}
                </div>
            </div>
        </div>
    );
  }

  export default Home;