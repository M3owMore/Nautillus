import { AiOutlineSend } from 'react-icons/ai';
import React, { useEffect, useCallback, useState, useRef } from 'react';
import axios from 'axios';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import {AiOutlineArrowLeft} from "react-icons/ai"
const ChatParent = (props:any) => {
    const [chat, setChat] = useState(null)
    useEffect(() => {
        async function fetchData() {
            setChat(null)

            const res = await axios.get(props.app.backendURL + `api/chat/${props.user.name}/`, {headers: {
                 Authorization: 'Bearer ' + props.app.cookies.get('access')
            }});

            setChat(res.data)
        };
        if(props.user.name)
            fetchData();
    }, [props.user.name]);

    return (
        <>
            {chat ? <Chat setIsChat={props.setIsChat} chat={chat} user={props.user} app={props.app}/> : <></>}
        </>
    );
}

const ChatMessage = (props:any) => {
    
    return ( 
        <div className={'w-full flex flex-row items-start text-main py-2 ' + (props.msg.sender === props.app.user.name ? "justify-end" : "justify-start")}>
            {(props.msg.sender === props.user.name) ? <img src={props.user.img} className="w-8 rounded-full mr-4 mt-5" alt="user"/> : <></>}
            <div className={"gap-1 flex flex-col justify-center " + (!(props.msg.sender === props.app.user.name) ? " items-start" : " items-end")}>
                <p className={"text-xs " + (!(props.msg.sender === props.app.user.name) ? " text-left" : " text-right")}>{props.msg.sender}</p>
                {props.msg.texts.map((text:any, i:number) => 
                    <div key={i} className="rounded-lg text-sm bg-bg-3 px-3 py-1">{text}</div>
                )}

            </div>
            {(props.msg.sender === props.app.user.name) ? <img src={props.app.user.img} className="w-8 rounded-full ml-4 mt-5" alt="user"/> : <></>}
        </div>
    );
}

const Chat = (props:any) => {
    const [img, setImg] = useState("")
    const [messages, setMessages]:any = useState(null)
    const inputRef:any = useRef();
    const scrollToBottomRef:any = useRef();

    const scrollToBottom = () => {setTimeout(() => {scrollToBottomRef.current.scrollIntoView({ behavior: 'smooth' })}, 50);}
    const socketUrl = 'ws://127.0.0.1:8000/ws/chat/' + props.chat.name + "/";

    let socket:any =  useWebSocket(socketUrl, {
        onOpen: () => console.log('Web Socket Opened!'),
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
    })

    const reconnectSocket = () => {
        socket =  useWebSocket(socketUrl, {
            onOpen: () => console.log('Web Socket Opened!'),
            //Will attempt to reconnect on all close events, such as server shutting down
            shouldReconnect: (closeEvent) => true,
        })
    }
    reconnectSocket()
    
    useEffect(() => {
        socket.sendJsonMessage({'command': 'fetch_messages', 'room_name': props.chat.name});
    }, [props.chat])

    useEffect(() => {
        if (socket.lastJsonMessage !== null) {
            const data = socket.lastJsonMessage;
            if (data['command'] === 'fetch_messages'){
                setMessages(data['messages'])
                setTimeout(() => {scrollToBottomRef.current.scrollIntoView()}, 100);
            }
            else if (data['command'] === 'new_message'){
                setMessages([...messages, data['message']])
                scrollToBottom()
            }
        }
    }, [socket.lastJsonMessage]);

    const handleMessageSend = useCallback(
        () =>{
            if( inputRef.current.value !== ""){
                if(inputRef.current.value !== ""){
                    socket.sendJsonMessage(({
                        'message': inputRef.current.value,
                        'command': 'new_message',          
                        'sender': props.app.user.name,
                        'room_name': props.chat.name,
                    }));
                }
                
                inputRef.current.value = ""
                scrollToBottom()
            }
        },
        []
    );


    const compressMassages = (msg:any) => {
        let motherArray = []
        let message:any = null

        
        for(let i = 0; i < msg.length; i++){
            
            if(message === null){
                message = {
                    sender: msg[i].sender,
                    texts: [msg[i].content]
                }
            }else if(message.sender == msg[i].sender){
                message.texts.push(msg[i].content)
            }else{
                motherArray.push(message)
                message = null
                message = {
                    sender: msg[i].sender,
                    texts: [msg[i].content]
                }
            }
        }
        
        if(message !== null){
            motherArray.push(message)
        }

        return motherArray
    }

    useEffect(() => {
        const keyDownHandler =  (event:any) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            handleMessageSend()
          }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);

    return ( 
        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-full flex flex-col rounded-xl p-4'>
                <div className='w-full h-10 flex flex-row text-main items-center'>
                    <button className='block tablet:hidden' onClick={() => props.setIsChat(false)}><AiOutlineArrowLeft className='text-main text-2xl mr-2 '/></button>

                    <img src={props.user.img} className="w-10 h-10 rounded-full mx-2" alt="friend"/>
                    <p className="text-lg mx-4">{props.user.name}</p>
                </div>

                <div className='py-4 w-full h-full flex flex-col  overflow-y-scroll'>
                    {messages != null ?
                        compressMassages(messages).map((msg:object, j:number) => {
                            return <ChatMessage user={props.user} key={j} app={props.app} img={img} msg={msg}/>
                        })
                        : <></>
                    }
                    <div ref={scrollToBottomRef}></div>
                </div>

                <div className="relative w-full">
                    <button onClick={handleMessageSend} className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <AiOutlineSend className='text-main text-xl' />
                    </button>
                    <input autoComplete="off"  ref={inputRef} type="text" id="simple-search chat-input" className="bg-gray-900 border border-none text-main text-sm rounded-lg focus:border-none focus:outline-none block w-full pl-10 p-2.5 " placeholder="Send Message" required/>
                </div>

            </div>
        </div>
    );
}
 
export default ChatParent;