import { useState, useEffect } from "react"
import axios from "axios"
import { PuffLoader  } from "react-spinners";
import {AiFillMessage} from "react-icons/ai"
import {MdPersonRemove} from "react-icons/md"


const Friend = (props:any) => {
    return (
        <button onClick={() => {window.location.pathname = `/users/user/${props.name}`}} className="w-full h-20 bg-bg-3 rounded-xl flex items-center justify-start p-4 gap-4 hover:bg-opacity-75 duration-200">
            <img src={`/userImages/${props.pfp}.webp`} className="w-16 h-16 rounded-full" alt="friend"/>
            <p className="text-main text-lg">{props.name}</p>
            <div className="w-full flex items-center justify-end gap-2">
                <button className="text-main text-2xl hover:text-secondary duration-200"><AiFillMessage/></button>
                <button onClick={() => props.setUnfriend(props.i)} className="text-main text-3xl hover:text-red-400 duration-200"><MdPersonRemove/></button>
            </div>
        </button>
    )
}

const Friends = (props:any) => {

    const [spinner, setSpinner] = useState(true)
    const [friends, setFriends]:any = useState(null)
    const [unfriend, setUnfriend]:any = useState(null)

    const onUnfriend = () => {
        axios.post(props.app.backendURL + "api/user/unfriend/", {user_name: friends[unfriend].user_name}, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            .then((res) => {
                setFriends((friends:any) =>
                    friends.filter((friend:any, i:number) => i !== unfriend)
                )
                setUnfriend(null);
            })
    }

    useEffect(() => {
        const getData = () => {
            axios.get(props.app.backendURL + "api/user/friends", {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            .then((res) => {setFriends(res.data); setSpinner(false)})
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
                    <h1 className="text-secondary font-alkSanet text-3xl text-center my-4">Friends:</h1>
                    <div className="w-full max-w-xl flex flex-col justify-start items-center p-4 gap-4">
                        {friends !== null ? friends.map((friend:any, i:number) => <Friend setUnfriend={setUnfriend} i={i}  pfp={friend.profile_picture} name={friend.user_name} key={i}/>) : null}
                        

                    </div>
                </div>
            }

            {unfriend !== null ? 
                <div className="fixed top-1/2 left-1/2 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 w-full p-4 h-64">
                    <div className="zoom-appear flex flex-col items-center justify-center p-2 gap-4  w-full max-w-sm rounded-xl bg-opacity-60 backdrop-blur-sm  h-full bg-bg-4">
                        <img src={`/userImages/${friends[unfriend].profile_picture}.webp`} className="w-20 h-20 mb-2 rounded-full" alt="unfriend"/>

                        <p className="text-main text-xl">Are you sure to unfriend <span className="text-2xl text-secondary">{friends[unfriend].user_name}</span>?</p>
                        <div className="flex w-full items-center justify-around">
                            <button onClick={() => setUnfriend(null)} className="px-2 py-1 text-xl text-main rounded-md bg-lime-600 hover:bg-opacity-80 duration-200">Cancel</button>
                            <button onClick={onUnfriend} className="px-2 py-1 text-xl text-main rounded-md bg-red-600 hover:bg-opacity-80 duration-200">Unfriend</button>
                        </div>
                    </div>
                </div>

            : null}
        </>
    )
}

export default Friends