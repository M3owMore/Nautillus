import { useState, useEffect } from "react"
import axios from "axios"
import { PuffLoader  } from "react-spinners";
import {TiTick, TiTimes} from "react-icons/ti"


const Request = (props:any) => {
    return (
        <button onClick={() => {window.location.pathname = `/users/user/${props.name}`}} className="w-full h-20 bg-bg-3 rounded-xl flex items-center justify-start p-4 gap-4 hover:bg-opacity-75 duration-200">
            <img src={`/userImages/${props.pfp}.webp`} className="w-16 h-16 rounded-full" alt="friend"/>
            <p className="text-main text-lg">{props.name}</p>
            <div className="relative z-[1px] w-full flex items-center justify-end gap-2">
                <button onClick={() => props.onAccept(props.i)} className="text-secondary text-3xl hover:text-opacity-50 duration-200"><TiTick/></button>
                <button onClick={() => props.onDecline(props.i)} className="text-red-400 text-3xl hover:text-red-600 duration-200"><TiTimes/></button>
            </div>
        </button>
    )
}

const FriendRequests = (props:any) => {

    const [spinner, setSpinner] = useState(true)
    const [requests, setRequests]:any = useState(null)

    const onAccept = (_i:number) => {
        axios.post(props.app.backendURL + "api/user/add/friends", {user_name: requests[_i].user_name}, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            .then((res) => {
                setRequests((friends:any) =>
                    friends.filter((friend:any, i:number) => i !== _i)
                )
            })
    }
    const onDecline = (_i:number) => {
        axios.post(props.app.backendURL + "api/user/delete/request", {user_name: requests[_i].user_name}, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            .then((res) => {
                setRequests((friends:any) =>
                    friends.filter((friend:any, i:number) => i !== _i)
                )
            })
    }

    useEffect(() => {
        const getData = () => {
            axios.get(props.app.backendURL + "api/user/friend-requests", {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            .then((res) => {setRequests(res.data); setSpinner(false)})
        }

        getData();
    }, [])

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
                    <h1 className="text-secondary font-alkSanet text-3xl text-center my-4">{props.app.langJson.words[props.app.lang].requests}:</h1>
                    <div className="w-full max-w-xl flex flex-col justify-start items-center p-4 gap-4">
                        {requests !== null ?
                            requests.length === 0 ? <p className="text-secondary font-thin">{props.app.langJson.words[props.app.lang].noRequests}</p> :
                            requests.map((request:any, i:number) => <Request onDecline={onDecline} onAccept={onAccept} i={i}  pfp={request.profile_picture} name={request.user_name} key={i}/>) 
                        : null}
                    </div>
                </div>
            }
        </>
    )
}

export default FriendRequests