import { useState, useEffect} from 'react';
import GroupsList from './GroupsList';
import Chat from '../Chat';
import friendsJson from "../../../friends.json"
import useWindowDimensions from '../../../js/useWindowDimensions';

const Groups = (props:any) => {
    const { width } = useWindowDimensions();

    let friendName = ""

    if(friendsJson.length > 0){
        friendName = friendsJson[0].name
    }

    const [name, setName] = useState(friendName)
    const [isChat, setIsChat] = useState(false)

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
                        <Chat app={props.app} name={name} setName={setName}/>
                    </>
                : 
                    <>
                        {isChat 
                        ? 
                            <Chat app={props.app} name={name} setName={setName} setIsChat={setIsChat}/>
                        :
                            <div className='w-full h-full'><GroupsList app={props.app} name={name} setName={setName} setIsChat={setIsChat}/></div>
                        }   
                    </>
                }
                
            </div>
        </div>
    );
}
 
export default Groups;