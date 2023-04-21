import Friend from './Friend';
import friendsChatJson from "../../../friendsChat.json"
import friendsJson from "../../../friends.json"


const FriendsList = (props) => {
 


    return ( 
        <div className=' w-64 h-full flex flex-col p-2'>  
            <div className='w-full h-20'></div>
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-900 border border-none text-main text-sm rounded-lg focus:border-none focus:outline-none block w-full pl-10 p-2.5 " placeholder="Search" required/>
            </div>

            <div className='h-full my-3 p-2 flex flex-col justify-start overflow-y-auto'>
                {friendsChatJson.map((friend, i) => {
                    let _friend = {
                        name: "",
                        img: "",
                        lastMassage: ""
                    }

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

                    return <Friend  key={i} _name={_friend.name} _lastMassage={_friend.lastMassage} _img={_friend.img} name={props.name} setName={props.setName} />
            })}
            </div>


        </div>
    );
}
 
export default FriendsList;