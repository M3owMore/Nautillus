import { useEffect, useState } from "react"
import {BsPersonFillAdd} from "react-icons/bs"
import {MdReportProblem} from "react-icons/md"
import {useParams} from "react-router-dom";
import axios from "axios";
import Friends from "../friends/Friends";

const User = (props:any) => {
    let { name } = useParams();
    let [user, setUser ]:any = useState(null);
    let [info, setInfo ]:any = useState(null);

    let [friendSent, setFriendSent ] = useState(false);
    let [isFriend, setIsFriend ] = useState(false);

    useEffect(() => {
        if(props.app.user.canUseApp === -1){
            window.location.href = "/signin"
        }
    }, [])

    useEffect(() => {
        axios.post(props.app.backendURL + "api/user/info", {"user_name": name}, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            .then(res => {
                if(res.data.user_info){
                    setUser(res.data.serializer_data)
                    setInfo(res.data.user_info)
                }
            })
            .catch(err => {

            })
    }, [])

    const sendFriendRequest =  () => {
        if(info.received_request){
            axios.post(props.app.backendURL + "api/user/add/friends", {"user_name": name}, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            .then(res => {
                setIsFriend(true)
            })
            .catch(err => {

            })
        }else{
            axios.post(props.app.backendURL + "api/user/add/request", {"user_name": name}, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
                .then(res => {
                    setFriendSent(true)
                })
                .catch(err => {

                })
        }

    }

    return (
        <div className="absolute top-20 left-0 right-0 bottom-0 flex items-center justify-center p-4">
            {user ?
                <div className="flex flex-col items-center justify-center bg-bg-2 rounded-xl max-w-3xl p-4  tablet:p-8 w-full gap-4">
                    <div className="flex flex-row items-center justify-around w-full mb-6">
                        <img src={props.app.user.img} className="w-32 h-32 rounded-full"/>
                        <div className="flex gap-2">
                            <button disabled={friendSent || info.sended_request || info.friend || isFriend} onClick={sendFriendRequest} className=" disabled:bg-opacity-50 flex items-center justify-center gap-2 bg-secondary hover:bg-opacity-70 duration-200 text-sm text-black rounded-full py-2 px-2  font-bold "><BsPersonFillAdd className="text-3xl"/> {info.friend || isFriend ? "Friends" : info.sended_request || friendSent ? "Sent" : info.received_request ? "Accept" : ""}</button>
                            <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-opacity-70 duration-200 text-sm text-black rounded-full py-2 px-2  font-bold"><MdReportProblem className="text-3xl"/></button>
                        </div>
                        
                    </div>
                    <div className="w-full flex items-center  justify-between">
                        <p className="text-main font-bpgESM text-2xl">{user.user_name.split("").map((char:string, i:number) => <span className="tablet:hover:text-4xl tablet:hover:text-secondary duration-200 " key={i}>{char}</span>)}</p>
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
            : null}
            
        </div>
    )
}

export default User