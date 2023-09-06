import { useState, useEffect } from "react"
import axios from "axios"
import { PuffLoader  } from "react-spinners";
import {AiFillMessage} from "react-icons/ai"
import {MdPersonRemove} from "react-icons/md"


const Friend = (props:any) => {
    return (
        <button className="w-full h-20 bg-bg-3 rounded-xl flex items-center justify-start p-4 gap-4 hover:bg-opacity-75 duration-200">
            <img src={`/userImages/${props.pfp}.webp`} className="w-16 h-16 rounded-full" alt="friend"/>
            <p className="text-main text-lg">{props.name}</p>
            <div className="w-full flex items-center justify-end gap-2">
                <button className="text-main text-2xl hover:text-secondary duration-200"><AiFillMessage/></button>
                <button className="text-main text-3xl hover:text-red-400 duration-200"><MdPersonRemove/></button>
            </div>
        </button>
    )
}

const Friends = (props:any) => {

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
                    <h1 className="text-secondary font-alkSanet text-3xl text-center my-4">Friends:</h1>
                    <div className="w-full max-w-xl flex flex-col justify-start items-center p-4 gap-4">
                        <Friend pfp={0} name={"TengoLomidze"}/>
                        <Friend pfp={12} name={"Sikha"}/>

                    </div>
                </div>
            }
        </>
    )
}

export default Friends