import { useEffect, useState} from 'react';
import FriendsList from './FriendsList';
import Chat from '../Chat';
import useWindowDimensions from '../../../js/useWindowDimensions';

const Messages = (props:any) => {
    const { width } = useWindowDimensions();

    const [user, setUser] = useState(null)
    const [isChat, setIsChat] = useState(true)

    // relocate if not logined
    useEffect(() => {
        if(props.app.user.canUseApp === -1){
            window.location.href = "/signin"
        }
    }, [props.app.user])

    return ( 
        <div className='flex flex-col absolute top-20 bottom-0 left-0 right-0'>
            <div className='w-full h-full flex flex-row'>
                {(width >= 550) 
                ? 
                    <>
                        <div className='w-64 h-full'><FriendsList app={props.app} user={user} setUser={setUser} setIsChat={setIsChat}/></div>
                        {user !== null ? <Chat app={props.app} user={user} setUser={setUser}/> : null}
                        
                    </>
                : 
                    <>
                        {isChat 
                        ? 
                        user !== null ? <Chat app={props.app} user={user} setUser={setUser} setIsChat={setIsChat}/> : null
                        :
                            <div className='w-full h-full'><FriendsList app={props.app} user={user} setUser={setUser} setIsChat={setIsChat}/></div>
                        }   
                    </>
                }
                
            </div>
        </div>
    );
}
 
export default Messages;