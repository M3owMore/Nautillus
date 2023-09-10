import { useEffect, useState} from 'react';
import FriendsList from './FriendsList';
import Chat from '../Chat';
import useWindowDimensions from '../../../js/useWindowDimensions';

const Messages = (props:any) => {
    const { width } = useWindowDimensions();

    const [name, setName] = useState("")
    const [isChat, setIsChat] = useState(false)


    useEffect(() => {
        console.log(true)
    }, [name])

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
                        <div className='w-64 h-full'><FriendsList app={props.app} name={name} setName={setName} setIsChat={setIsChat}/></div>
                        {name !== "" ? <Chat app={props.app} name={name} setName={setName}/> : null}
                        
                    </>
                : 
                    <>
                        {isChat 
                        ? 
                            name !== "" ? <Chat app={props.app} name={name} setName={setName} setIsChat={setIsChat}/> : null
                        :
                            <div className='w-full h-full'><FriendsList app={props.app} name={name} setName={setName} setIsChat={setIsChat}/></div>
                        }   
                    </>
                }
                
            </div>
        </div>
    );
}
 
export default Messages;