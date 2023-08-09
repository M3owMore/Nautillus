import NauCoin from "../../../img/NauCoin.png"
import { Link } from "react-router-dom";


import { AiFillClockCircle, AiFillBook } from 'react-icons/ai';

import { useState, useEffect} from 'react';
import axios from "axios";

const Box = (props:any) => {
    return (
        <button onClick={() => {window.location.href = `/courses/course?course=${props.course.title}`}} className=" flex flex-col h-full justify-evenly items-center bg-bg-3 rounded-xl p-1">
            <p className='text-main text-md mx-4 font-bpgESM'>{props.course.title}</p>
            <p className='text-main text-xs mx-4'>Level: {props.course.level}</p>
            <img src="https://play-lh.googleusercontent.com/xfEwmzQADrjODuFw94jDJpcUM2f15a9wKvzOExZ8hH7zvYaNpXUzH-fcbAp3RTrPs18" className="object-contain w-32" alt="course"/>
        </button>
    )
}

const Home = (props:any) => {
    const [cousesWindow, setCoursesWindow] = useState(0)
    const [courses, setCourses] = useState([])


    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(props.app.backendURL + "api/user/courses/", {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            setCourses(res.data)
        }
        getData();
    }, [])

    return (
        <div className='absolute top-20 tablet:bottom-0 left-0 right-0 flex flex-col tablet:flex-row'>
            <div className="w-full h-full flex items-end justify-center flex-col p-4">
                <div className="bg-bg-2 w-full h-full max-w-md rounded-3xl flex items-center justify-center flex-col gap-4 p-4 shadow-md shadow-gray-800">
                    <img src={props.app.user.img} className="w-32 h-32 rounded-full"/>
                    <div className="w-full flex items-center  justify-between">
                        <p className="text-main font-bpgESM text-3xl">{props.app.user.name}</p>
                        <div className="flex justify-center items-center gap-2">
                            <img src={NauCoin} className="w-8 h-8 rounded-full"/>
                            <p className="text-main font-bpgESM text-xl">{props.app.user.nauCoin}</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full h-4 bg-bg-3 rounded-full flex justify-start items-center ">
                            <div className="h-full bg-white w-10 rounded-full" style={{width: props.app.user.XP / 10 + "%"}}>
                                
                            </div>
                        </div>
                        <p className="text-main text-md text-right w-full"><span className="text-secondary">{props.app.user.XP} XP</span> / 1000 XP</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-start justify-center flex-col p-4 gap-4">
                <div className="w-full h-full bg-bg-2 rounded-xl max-w-md flex items-center justify-start flex-col p-4 shadow-md shadow-gray-800">
                    <p className="text-main text-2xl font-alkSanet w-full text-left">Courses</p>
                    <div className="overflow-x-auto w-full py-2">
                        <div className="flex items-center gap-2">
                            <Box course={{title: "Nmap", level: "Beginner"}}/>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="w-full h-full bg-bg-2 rounded-xl max-w-md flex items-center justify-start flex-col p-4 shadow-md shadow-gray-800">
                    <p className="text-main text-2xl font-alkSanet w-full text-left"></p>
                </div>
            </div>
        </div>
    );
  }

  export default Home;