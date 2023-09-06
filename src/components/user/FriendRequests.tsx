import { useState, useEffect } from "react"
import axios from "axios"
import { PuffLoader  } from "react-spinners";
import {TiTick, TiTimes} from "react-icons/ti"


const Request = (props:any) => {
    return (
        <button className="w-full h-20 bg-bg-3 rounded-xl flex items-center justify-start p-4 gap-4 hover:bg-opacity-75 duration-200">
            <img src={`/userImages/${props.pfp}.webp`} className="w-16 h-16 rounded-full" alt="friend"/>
            <p className="text-main text-lg">{props.name}</p>
            <div className="w-full flex items-center justify-end gap-2">
                <button className="text-secondary text-3xl hover:text-opacity-50 duration-200"><TiTick/></button>
                <button className="text-red-400 text-3xl hover:text-red-600 duration-200"><TiTimes/></button>
            </div>
        </button>
    )
}

const FriendRequests = (props:any) => {

    const [spinner, setSpinner] = useState(false)

    // relocate if not logined
    useEffect(() => {
        if(props.app.user.canUseApp === -1){
            window.location.href = "/signin"
        }
    }, [props.app.user])

    return (
        <>
            {spinner ?  
                <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center  overflow-hidden">
                    
                    <PuffLoader 
                        color="rgb(180, 210, 115)"
                        size={128}
                    />
                </div>
            :
                <div className="w-full flex flex-col justify-center items-center">
                    <h1 className="text-secondary font-alkSanet text-3xl text-center my-4">Requests:</h1>
                    <div className="w-full max-w-xl flex flex-col justify-start items-center p-4 gap-4">
                        <Request pfp={6} name={"CUP"}/>
                        <Request pfp={23} name={"Gela"}/>
                    </div>
                </div>
            }
        </>
    )
}

export default FriendRequests