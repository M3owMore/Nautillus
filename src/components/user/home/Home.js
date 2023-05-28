import NauCoin from "../../../img/NauCoin.png"
import { Link } from "react-router-dom";

import { AiFillClockCircle, AiFillBook } from 'react-icons/ai';

import { useState} from 'react';
import Header from '../../Header';


const Home = (props) => {
    const [cousesWindow, setCoursesWindow] = useState(0)

    return (
        <div className='w-screen h-screen flex flex-col'>
            <Header app={props.app} scroll = {false} fixed={false}/>
            <div className='w-full h-full flex flex-row'>

                <div className={'w-full h-full flex flex-col'}>
                    <div className='flex flex-row p-1 h-64'>
                         <div className='bg-neutral-900 h-full w-full m-2 rounded-xl p-4 text-main'>
                            <div className='flex flex-row justify-start items-center h-1/2'>
                                <img src={props.app.user.img} className="w-16 h-16 rounded-full mr-4" alt="user"/>
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
                            </div>

                            <div className='flex flex-row w-full h-1/2'>
                                <div className='w-full flex items-center justify-start'>
                                    <p className='text-lg mx-3 '>{props.app.user.name}</p>
                                </div>
                                <div className='flex flex-row items-center justify-end mt-2 p-5 w-full h-full'>
                                    <p className='text-main text-md mx-4'>Plan: {props.app.user.plan}</p>
                                    <Link to="/pricing"><button className="bg-main text-black py-1 px-1 rounded-md font-bold">Upgrade Plan</button></Link>
                                </div>
                            </div>
                         </div>
                    </div>

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
                                        <div className="mx-2 flex flex-col w-48 h-full justify-evenly items-center bg-neutral-800 rounded-xl p-1">
                                            <p className='text-main text-lg mx-4'>Nmap</p>
                                            <img src="https://play-lh.googleusercontent.com/xfEwmzQADrjODuFw94jDJpcUM2f15a9wKvzOExZ8hH7zvYaNpXUzH-fcbAp3RTrPs18" className="object-contain w-24 h-24" alt="course"/>
                                        </div>

                                        <div className="mx-2 flex flex-col w-48 h-full justify-evenly items-center bg-neutral-800 rounded-xl p-1">
                                            <p className='text-main text-lg mx-4'>Burp Suite</p>
                                            <img src="https://www.wst.space/wp-content/uploads/2018/08/output-onlinepngtools.png" className="object-contain w-24 h-24" alt="course"/>
                                        </div>

                                        <div className="mx-2 flex flex-col w-48 h-full justify-evenly items-center bg-neutral-800 rounded-xl p-1">
                                            <p className='text-main text-lg mx-4'>Metasploit</p>
                                            <img src="https://assets.tryhackme.com/img/modules/metasploit.png" className="object-contain w-24 h-24" alt="course"/>
                                        </div>
                                    </div>
                                </div>
                            :
                            <div className="flex flex-row overflow-x-scroll w-full h-full p-2">
                            <div className="flex flex-row w-min-full h-full">
                                <div className="mx-2 flex flex-col w-48 h-full justify-evenly items-center bg-neutral-800 rounded-xl p-1">
                                    <p className='text-main text-lg mx-4'>Nmap</p>
                                    <img src="https://play-lh.googleusercontent.com/xfEwmzQADrjODuFw94jDJpcUM2f15a9wKvzOExZ8hH7zvYaNpXUzH-fcbAp3RTrPs18" className="object-contain w-24 h-24" alt="course"/>
                                </div>

                                <div className="mx-2 flex flex-col w-48 h-full justify-evenly items-center bg-neutral-800 rounded-xl p-1">
                                    <p className='text-main text-lg mx-4'>Burp Suite</p>
                                    <img src="https://www.wst.space/wp-content/uploads/2018/08/output-onlinepngtools.png" className="object-contain w-24 h-24" alt="course"/>
                                </div>

                                <div className="mx-2 flex flex-col w-48 h-full justify-evenly items-center bg-neutral-800 rounded-xl p-1">
                                    <p className='text-main text-lg mx-4'>Metasploit</p>
                                    <img src="https://assets.tryhackme.com/img/modules/metasploit.png" className="object-contain w-24 h-24" alt="course"/>
                                </div>
                                <div className="mx-2 flex flex-col w-48 h-full justify-evenly items-center bg-neutral-800 rounded-xl p-1">
                                    <p className='text-main text-lg mx-4'>SQL injections</p>
                                    <img src="https://blogs.zeiss.com/digital-innovation/de/wp-content/uploads/sites/2/2020/05/201909_Security_SQL-Injection_1.png" className="object-contain w-24 h-24" alt="course"/>
                                </div>
                                <div className="mx-2 flex flex-col w-48 h-full justify-evenly items-center bg-neutral-800 rounded-xl p-1">
                                    <p className='text-main text-lg mx-4'>Reverse engineering</p>
                                    <img src="https://cdn-icons-png.flaticon.com/512/5231/5231459.png" className="object-contain w-24 h-24" alt="course"/>
                                </div>
                            </div>
                        </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default Home;