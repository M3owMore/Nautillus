import { useEffect, useState } from "react"
import {BsPersonFillAdd} from "react-icons/bs"
import {MdReportProblem} from "react-icons/md"


const User = (props:any) => {
    const [name, setName]:any = useState("")
    useEffect(() => {
        if(props.app.user.canUseApp === -1){
            window.location.href = "/signin"
        }
    }, [])

    useEffect(() => {
        async function getName() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            setName(urlParams.get("name"));
        };
        
        getName();
    }, []);

    return (
        <div className="absolute top-20 left-0 right-0 bottom-0 flex items-center justify-center p-4">
            <div className="flex flex-col items-center justify-center bg-bg-2 rounded-xl max-w-3xl p-4  tablet:p-8 w-full gap-4">\
                <div className="flex flex-row items-center justify-around w-full mb-6">
                    <img src={props.app.user.img} className="w-32 h-32 rounded-full"/>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center gap-2 bg-secondary hover:bg-opacity-70 duration-200 text-sm text-black rounded-full py-2 px-2  font-bold"><BsPersonFillAdd className="text-3xl"/></button>
                        <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-opacity-70 duration-200 text-sm text-black rounded-full py-2 px-2  font-bold"><MdReportProblem className="text-3xl"/></button>
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
                
            </div>
        </div>
    )
}

export default User