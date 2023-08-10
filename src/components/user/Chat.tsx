import { AiOutlineSend } from 'react-icons/ai';
import { ImArrowLeft2 } from 'react-icons/im';
import { useEffect, useCallback, useState, useRef } from 'react';
import axios from 'axios';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const ChatParent = (props:any) => {
    const [chat, setChat] = useState(null)
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(props.app.backendURL + `api/chat/${props.name}/`, {headers: {
                 Authorization: 'Bearer ' + props.app.cookies.get('access')
            }});

            setChat(res.data)
        };
        
        fetchData();
    }, []);

    return (
        <>
            {chat ? <Chat chat={chat} name={props.name} app={props.app}/> : <></>}
        </>
    );
}

const ChatMessage = (props:any) => {
    return ( 
        <div className={'w-full flex flex-row items-end text-main ' + (props.msg.sender === props.app.user.name ? "justify-end" : "justify-start")}>
            {!(props.msg.sender === props.app.user.name) ? <img src={props.app.user.img} className="w-8 rounded-full mr-4" alt="user"/> : <></>}
            <div className="mt-4">
                <p className=" text-xs text-center">{props.msg.sender}</p>
                
                    <div className="rounded-lg bg-zinc-900 p-0.5 mt-2">
                        <p className="mx-4 my-1">{props.msg.content}</p>
                    </div>
            </div>
            {(props.msg.sender === props.app.user.name) ? <img src={props.app.user.img} className="w-8 rounded-full ml-4" alt="user"/> : <></>}
        </div>
    );
}

const Chat = (props:any) => {
    const [img, setImg] = useState("")
    const [messages, setMessages]:any = useState(null)
    const inputRef:any = useRef(null);

    const socketUrl = 'ws://127.0.0.1:8000/ws/chat/' + props.chat.name + "/";

    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
    }:any =  useWebSocket(socketUrl, {
        onOpen: () => console.log('Web Socket Opened!'),
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
    })

    useEffect(() => {
        sendJsonMessage({'command': 'fetch_messages', 'room_name': props.chat.name});
    }, [])

    useEffect(() => {
        if (lastJsonMessage !== null) {
            const data = lastJsonMessage;
            console.log(data['command'])
            console.log(data["messages"])
            if (data['command'] === 'fetch_messages'){
                setMessages(data['messages'])
            }
            else if (data['command'] === 'new_message'){
                setMessages([...messages, data['message']])
            }
        }
    }, [lastJsonMessage]);

    const handleMessageSend = useCallback(
        () =>{
            sendJsonMessage(({
                'message': inputRef.current.value,
                'command': 'new_message',          
                'sender': props.app.user.name,
                'room_name': props.chat.name,
            }));
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
                    {messages != null ?
                        messages.map((msg:object, j:number) => {
                            return <ChatMessage key={j} app={props.app} img={img} msg={msg}/>
                        })
                        : <></>
                    }
                </div>

                <div className="relative w-full">
                    <button onClick={handleMessageSend} className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <AiOutlineSend className='text-main text-xl' />
                    </button>
                    <input  ref={inputRef} type="text" id="simple-search chat-input" className="bg-gray-900 border border-none text-main text-sm rounded-lg focus:border-none focus:outline-none block w-full pl-10 p-2.5 " placeholder="Send Message" required/>
                </div>

            </div>
        </div>
    );
}
 
export default ChatParent;