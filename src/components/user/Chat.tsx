import { AiOutlineSend } from 'react-icons/ai';
import { ImArrowLeft2 } from 'react-icons/im';
import { /*useEffect,*/ useCallback, useState } from 'react';
/*
import friendsJson from "../../friends.json"
import friendsChatJson from "../../friendsChat.json"
import useWebSocket, { ReadyState } from 'react-use-websocket';
*/
const ChatMassage = (props:any) => {


    return ( 
        <div className={'w-full flex flex-row items-end text-main ' + (props.massages.name === props.app.user.name ? "justify-end" : "justify-start")}>
            {!(props.massages.name === props.app.user.name) ? <img src={props.img} className="w-8 rounded-full mr-4" alt="user"/> : <></>}
            <div className="mt-4">
                <p className=" text-xs text-center">{props.massages.name}</p>
                {props.massages.massages.map((msg:any, i:any) => 
                    <div key={i} className="rounded-lg bg-zinc-900 p-0.5 mt-2">
                        <p className="mx-4 my-1">{msg}</p>
                    </div>
                )}
            </div>
            {(props.massages.name === props.app.user.name) ? <img src={props.app.user.img} className="w-8 rounded-full ml-4" alt="user"/> : <></>}
        </div>
    );
}

const Chat = (props:any) => {

    const [img/*, setImg*/] = useState("")
    const [massages/*, setMassages*/]:any = useState(null)

/*
    const socketUrl = 'wss://echo.websocket.org';

    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
    }:any = useWebSocket(socketUrl, {
        onOpen: () => console.log('Web Socket Opened!'),
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
    });

    useEffect(() => {
        if (lastJsonMessage !== null) {
            const data = JSON.parse(lastJsonMessage);
            console.log(data['command'])
            console.log(data["messages"])
            if (data['command'] === 'fetch_messages'){
                setMassages(data['messages'])
            }
            else if (data['command'] === 'new_message'){
                setMassages([...massages, ...data['messages']])
            }
        }
    }, [lastJsonMessage]);
*/
    const handleMassageSend = useCallback(
        () =>{
            /*
            const messageInputDom:any = document.querySelector('#chat-input');
            const message = messageInputDom.value;
            sendJsonMessage(JSON.stringify({
                'message': message,
                'command': 'new_message',          
                'sender': props.app.user.name,
                'room_name': "Room",
            }));
            messageInputDom.value = '';
            */
        },
        []
    );

    return ( 
        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-full flex flex-col rounded-xl p-5'>
                <div className='w-full h-10 flex flex-row text-main items-center'>
                    {(props.setIsChat != null) ? <ImArrowLeft2 className='text-main text-2xl mr-2 ' onClick={() => props.setIsChat(false)}/> : <></> }

                    <img src={img} className="w-10 h-10 rounded-full mx-2" alt="friend"/>
                    <p className="text-lg mx-4">{props.name}</p>
                </div>

                <div className='py-4 w-full h-full flex flex-col  overflow-y-scroll'>
                    {massages != null ?
                        massages.map((massages:any, j:any) => {
                            return <ChatMassage key={j} app={props.app} img={img} massages={massages}/>
                        })
                        : <></>
                    }
                </div>

                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <AiOutlineSend className='text-main text-xl' onClick={handleMassageSend}/>
                    </div>
                    <input type="text" id="simple-search chat-input" className="bg-gray-900 border border-none text-main text-sm rounded-lg focus:border-none focus:outline-none block w-full pl-10 p-2.5 " placeholder="Send Message" required/>
                </div>

            </div>
        </div>
    );
}
 
export default Chat;