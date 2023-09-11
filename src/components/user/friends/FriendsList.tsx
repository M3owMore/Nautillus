import { useState, useEffect} from 'react';
import axios from 'axios';

const Friend = (props:any) => {
    return ( 
        <div className='w-full h-12 flex flex-row bg-bg-3 my-1 p-1 text-main hover:bg-zinc-800 rounded-lg'
            onClick={() => {
                props.setUser(props.friend)
                if(props.setIsChat != null){
                    props.setIsChat(true)
                }
            }}
        >
            <img src={props.friend.img} className="w-10 h-10 rounded-full" alt="friend"/>
            <div className='w-full h-full flex flex-col justify-center p-1 items-start pl-3'>
                <p className="">{props.friend.name}</p>
            </div> 
        </div>
    );
}

const FriendsList = (props:any) => {

    const [frinds, setFriends]:any = useState([])

    useEffect(() => {
        
        async function fetchData() {
            const res = await axios.get(props.app.backendURL + "api/user/friends/", {headers: {
                 Authorization: 'Bearer ' + props.app.cookies.get('access')
            }});

            setFriends(res.data)
            if(res.data.length > 0){
                let _friend = {
                    name: res.data[0].user_name,
                    img: `/userImages/${res.data[0].profile_picture}.webp`,
                }
                props.setUser(_friend)
            }
                
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

            <div className='h-full my-3 px-2 flex flex-col justify-start overflow-y-auto'>
                {frinds.map((friend:any, i:any) => {
                    let _friend = {
                        name: friend.user_name,
                        img: `/userImages/${friend.profile_picture}.webp`,
                    }

                    return <Friend setIsChat={props.setIsChat} setUser={props.setUser} key={i} friend={_friend} />
            })}
            </div>


        </div>
    );
}
 
export default FriendsList;