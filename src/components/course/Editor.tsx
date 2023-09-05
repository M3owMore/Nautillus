import { useState, useEffect } from "react";
import AceEditor from "react-ace";
import {BsPlayCircleFill} from "react-icons/bs"
import axios from "axios";
import { PuffLoader  } from "react-spinners";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-python";


import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import 'brace/ext/searchbox';
import 'brace';
import 'brace/ext/searchbox';


const Editor = (props:any) => {
    
    const [code, setCode] = useState(props.code)
    const [output, setOutput]:any = useState(null)
    const [error, setError]:any = useState(null)


    const onRunCode = () => {
        setOutput(undefined)
        setError(null)
        let data:any = {
            language: props.name,
            code: code
        }
        axios.post(props.app.backendURL + "api/user/execute/", data, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            .then(res => setOutput(res.data.output))
            .catch(err => {setOutput(""); setError(err.response.data.error)})
    }

    useEffect(() => console.log(code), [code])

    const getNameForEditor = (name:string) => {
        switch(name){
            case "C++":
                return "c_cpp";
            case "Python":
                return "python";
            case "Ruby":
                return "ruby";
        }
    }

    return (
        <div className={'flex flex-col w-full h-full items-center gap-2 p-3' + (props.bool ? "" : " hidden")}>
            <div className="w-full h-1/2">
                <AceEditor
                    style={{width: "100%", height: "100%", background: "#011014"}}
                    placeholder="Write your code here"
                    mode={getNameForEditor(props.name)}
                    theme="github_dark"
                    name="blah2"
                    fontSize={12}
                    onChange={(value:any) => setCode(value)}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={code}
                    setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}/>              
            </div>
            <Console onRunCode={onRunCode} output={output} error={error}/>
        </div>
  )
}

const Console = (props:any) => {
    return (
        <div className="w-full h-1/2">
            <div className='relative w-full h-full flex items-center justify-center bg-bg-3 rounded-md'>
                {props.output === undefined ? 
                    <PuffLoader color="rgb(180, 210, 115)" size={128}/>
                : null}

                { props.output === null || props.output === undefined ? null : 
                    <div className="w-full h-full overflow-y-auto flex-col-reverse">
                            <div className="flex flex-col gap-1 p-1">
                                {props.output !== "" ? props.output.split("\n").map((line:string, i:number) => <p className="w-full text-main" key={i}>{line}</p>) : null}
                                {props.error !== null ? props.error.split("\n").map((line:string, i:number) => <p className="w-full text-red-400" key={i}>{line}</p>) : null}
                            </div>
                    </div>
                }
                <button onClick={props.onRunCode} className='text-secondary hover:text-opacity-75 duration-200 absolute  bottom-2 right-2'><BsPlayCircleFill className="text-4xl"/></button>
            </div>
        </div>
    )
}

export default Editor