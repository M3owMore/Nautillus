import { useState, useEffect} from 'react';
import axios from 'axios';

const Friend = (props:any) => {
    return ( 
        <div className='w-full h-12 flex flex-row bg-zinc-900 my-1 p-1 text-main hover:bg-zinc-800 rounded-lg'
            onClick={() => {
                props.setName(props._name)
                if(props.setIsChat != null){
                    props.setIsChat(true)
                }
            }}
        >
            <img src={props._img} className="w-10 h-10 rounded-full" alt="friend"/>
            <div className='w-full h-full flex flex-col justify-center p-1 items-start pl-3'>
                <p className="">{props._name}</p>
            </div> 
        </div>
    );
}

const FriendsList = (props:any) => {

    const [friendsJson, setFriendsJson]:any = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(props.app.backendURL + "api/user/friends/", {headers: {
                 Authorization: 'Bearer ' + props.app.cookies.get('access')
            }});

            setFriendsJson(res.data)
        };
        
        fetchData();
    }, []);

    return ( 
        <div className='w-full h-full flex flex-col p-2'>  
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-900 border border-none text-main text-sm rounded-lg focus:border-none focus:outline-none block w-full pl-10 p-2.5 " placeholder="Search" required/>
            </div>

            <div className='h-full my-3 p-2 flex flex-col justify-start overflow-y-auto'>
                {friendsJson.map((friend:any, i:any) => {
                    let _friend = {
                        name: friend.user_name,
                        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
                        lastMassage: ""
                    }

                    /*
                        if (friend.members[0] === props.app.user.name){
                            _friend.name = friend.members[1]
                        }else {
                            _friend.name = friend.members[0]
                        }
                        
                        if (friend.chat[friend.chat.length - 1].name === props.app.user.name){
                            _friend.lastMassage = "You: " + friend.chat[friend.chat.length - 1].massages[friend.chat[friend.chat.length - 1].massages.length - 1]
                        }else{
                            _friend.lastMassage = friend.chat[friend.chat.length - 1].name  + ": " + friend.chat[friend.chat.length - 1].massages[friend.chat[friend.chat.length - 1].massages.length - 1]
                        }
                    
                    for(let i = 0; i < friendsJson.length; i++){
                        if(_friend.name === friendsJson[i].name){
                            _friend.img = friendsJson[i].img
                        }
                    }
                    */

                    return <Friend setIsChat={props.setIsChat} key={i} _name={_friend.name} _lastMassage={_friend.lastMassage} _img={_friend.img} name={props.name} setName={props.setName} />
            })}
            </div>


        </div>
    );
}
 
export default FriendsList;