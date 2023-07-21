import { useState} from 'react';
import Header from '../../Header';
import FriendsList from './FriendsList';
import Chat from '../Chat';
import useWindowDimensions from '../../../js/useWindowDimensions';

const Friends = (props:any) => {
    const { width } = useWindowDimensions();

    const [name, setName] = useState("")
    const [isChat, setIsChat] = useState(false)


    

    return ( 
        <div className='w-screen h-screen flex flex-col'>
            <Header app={props.app} scroll = {false} fixed={true}/>
            <div className='w-full h-full flex flex-row'>
                {(width >= 550) 
                ? 
                    <>
                        <div className='w-64 h-full'><FriendsList app={props.app} name={name} setName={setName}/></div>
                        <Chat app={props.app} name={name} setName={setName}/>
                    </>
                : 
                    <>
                        {isChat 
                        ? 
                            <Chat app={props.app} name={name} setName={setName} setIsChat={setIsChat}/>
                        :
                            <div className='w-full h-full'><FriendsList app={props.app} name={name} setName={setName} setIsChat={setIsChat}/></div>
                        }   
                    </>
                }
                
            </div>
        </div>
    );
}
 
export default Friends;