import { useEffect, useState, useRef } from "react";
import { PuffLoader  } from "react-spinners";


const Console = (props:any) => {
    const [output, setOutput]:any = useState("")
    const inputRef:any = useRef()

    let runCommand:any; 

    const onTerminalEnter = () => {
        const value = inputRef.current.value
        inputRef.current.value = ""
    }

    const addOutput = (_output:any) => {
        setOutput(`${output}\n${_output}`)
    }

    useEffect(() => {
        const keyDownHandler =  (event:any) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            onTerminalEnter()
          }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);

    return (
        <div className="w-full h-full">
            <div className='relative w-full h-full flex items-center justify-center bg-bg-3 rounded-md p-2'>

                { output === null || output === undefined ? null : 
                    <div className="w-full h-full overflow-y-auto flex-col-reverse">
                            <div className="flex flex-col p-1">
                                {output.split("\n").map((line:string, i:number) => <p className="w-full text-main" key={i}>{line}</p>)}
                                <div className="flex items-center justify-center">
                                    <p className="text-main text-center">{"> "}</p>
                                    <input ref={inputRef} className="w-full bg-transparent border-transparent text-main outline-none h-full" type="text"/>
                                </div>
                            </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Console