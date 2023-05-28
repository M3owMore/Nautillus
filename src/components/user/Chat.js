import { AiOutlineSend } from 'react-icons/ai';
import { ImArrowLeft2 } from 'react-icons/im';
import { useEffect, useState } from 'react';
import friendsJson from "../../friends.json"
import friendsChatJson from "../../friendsChat.json"
import ChatMassage from './ChatMassage';

const Chat = (props) => {

    const [img, setImg] = useState("")
    const [massages, setMassages] = useState(null)


    useEffect(() => {
        for(let i = 0; i < friendsJson.length; i++){
            if(friendsJson[i].name === props.name){
                setImg(friendsJson[i].img)

                for(let j = 0; j < friendsChatJson.length; j++){
                    if(friendsChatJson[j].members[0] === props.name || friendsChatJson[j].members[1] === props.name){
                        setMassages(friendsChatJson[j].chat)
                    }
                }
            }
        }
      }, [props.name]) 


    return ( 
        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-full flex flex-col rounded-xl p-5'>
                <div className='relative w-full h-20'></div>
                <div className='w-full h-10 flex flex-row text-main items-center'>
                    {(props.setIsChat != null) ? <ImArrowLeft2 className='text-main text-2xl mr-2 ' onClick={() => props.setIsChat(false)}/> : <></> }

                    <img src={img} className="w-10 h-10 rounded-full mx-2" alt="friend"/>
                    <p className="text-lg mx-4">{props.name}</p>
                </div>

                <div className='py-4 w-full h-full flex flex-col  overflow-y-scroll'>
                    {massages != null ?
                        massages.map((massages, j) => {
                            return <ChatMassage key={j} app={props.app} img={img} massages={massages}/>
                        })
                        : <></>
                    }
                </div>

                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <AiOutlineSend className='text-main text-xl'/>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-900 border border-none text-main text-sm rounded-lg focus:border-none focus:outline-none block w-full pl-10 p-2.5 " placeholder="Send Message" required/>
                </div>

            </div>
        </div>
    );
}
 
export default Chat;