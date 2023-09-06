import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { PuffLoader  } from "react-spinners";
import {BiSolidSearchAlt2} from "react-icons/bi"

const User = (props:any) => {
    return (
        <button className="w-full h-20 bg-bg-3 rounded-xl flex items-center justify-start p-4 gap-4 hover:bg-opacity-75 duration-200">
            <img src={`/userImages/${props.pfp}.webp`} className="w-16 h-16 rounded-full" alt="friend"/>
            <p className="text-main text-lg">{props.name}</p>
        </button>
    )
}

const SearchUsers = (props:any) => {

    const [spinner, setSpinner] = useState(false)
    let usernameRef:any = useRef();
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
                    <form className="flex flex-col justify-center items-center w-full max-w-sm">
                        <div className="w-full p-4">
                            <div className="relative w-full">
                                <input
                                    ref={usernameRef}
                                    type="text"
                                    name="user_name"
                                    className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-full">
                                    <BiSolidSearchAlt2 className="text-secondary text-2xl"/>
                                </div>
                            </div>
                            
                        </div>
                    </form>
                    <div className="w-full max-w-xl flex flex-col justify-start items-center p-4 gap-4">
                        <User pfp={0} name={"TengoLomidze"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                        <User pfp={12} name={"Sikha"}/>
                    </div>
                </div>
            }
        </>
    )
}

export default SearchUsers