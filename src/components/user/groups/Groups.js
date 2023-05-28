import { useState} from 'react';
import Header from '../../Header';
import GroupsList from './GroupsList';
import Chat from '../Chat';
import friendsJson from "../../../friends.json"
import useWindowDimensions from '../../../js/useWindowDimensions';

const Groups = (props) => {
    const { width } = useWindowDimensions();

    let friendName = ""

    if(friendsJson.length > 0){
        friendName = friendsJson[0].name
    }

    const [name, setName] = useState(friendName)
    const [isChat, setIsChat] = useState(false)



    return ( 
        <div className='w-screen h-screen flex flex-col'>
            <Header app={props.app} scroll = {false} fixed={true}/>
            <div className='w-full h-full flex flex-row'>
                {(width >= 550) 
                ? 
                    <>
                        <div className='w-64 h-full'><GroupsList app={props.app} name={name} setName={setName}/></div>
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