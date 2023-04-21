import { useState} from 'react';
import Header from '../../Header';
import FriendsList from './FriendList';
import Chat from '../Chat';
import friendsJson from "../../../friends.json"

const Friends = (props) => {
    let friendName = ""

    if(friendsJson.length > 0){
        friendName = friendsJson[0].name
    }

    const [name, setName] = useState(friendName)



    return ( 
        <div className='w-screen h-screen flex flex-col'>
            <Header app={props.app} scroll = {false} fixed={true}/>
            <div className='w-full h-full flex flex-row'>
                <FriendsList app={props.app} name={name} setName={setName}/>
                <Chat app={props.app} name={name} setName={setName}/>
            </div>
        </div>
    );
}
 
export default Friends;