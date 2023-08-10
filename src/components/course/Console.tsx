//import {RiSendPlane2Fill} from "react-icons/ri"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Console = (props:any) => {
    const [Command, setCommand] = useState("")
    const [Data, setData] = useState([])

    const handleSubmit = async () => {
        /*const data = { command: Command };
        const res = await axios.post('http://localhost:5000/send', data);*/
    };
    Command
    useEffect(() => {
        const interval = setInterval(async () => {
            const res = await axios.get('http://localhost:5000/get');
            setData(res.data);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleKeyPress = (event:any) => {
        if(event.key === 'Enter'){
            handleSubmit()
            event.value = ""
        }
    }

    return (
        <>
            <div className={"flex flex-col items-center justify-center h-full bg-neutral-900" + ((props.fixed === true) ? " fixed w-1/2 top-0 left-1/2" : " w-full")}>
                 <div className={"flex flex-col items-center justify-center h-full p-4 bg-neutral-900" + ((props.fixed === true) ? " fixed w-1/2 top-0 left-1/2" : " w-full")}>
                    <div className="h-full w-full text-main flex flex-col items-start justify-start text-left overflow-y-scroll">
                        {Data.map((object, i) => <p key={i}>{object}</p>)}
                    </div>
                    <div className="flex flex-row justify-between items-center h-1/6 w-full console">
                        <p className="text-xl text-main">{">"}</p>
                        <input
                        type="command"
                        className="w-full text-lg mt-1 text-main bg-transparent hover:outline-none focus:outline-none"
                        onChange={(e) => setCommand(e.target.value)}
                        onKeyPress={handleKeyPress}
                        /> 
                    </div> 
                </div>

                {/*<iframe src='https://vscode.dev/'></iframe>*/}
            </div>
        </>
    );
}


export default Console;