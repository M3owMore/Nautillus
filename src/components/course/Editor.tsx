import React from 'react'
import AceEditor from "react-ace";
import {BsPlayCircleFill} from "react-icons/bs"


import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import 'brace/ext/searchbox';
import 'brace';
import 'brace/ext/searchbox';


const Editor = (props:any) => {
    function onChange(newValue:any) {
        console.log("change", newValue);
    }

  return (
    <div className='flex flex-col w-full h-full items-center gap-2 p-3'>
        <AceEditor
            style={{width: "100%", height: "100%", background: "#011014"}}
            placeholder="Placeholder Text"
            mode="c_cpp"
            theme="github_dark"
            name="blah2"
            fontSize={12}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={`// Your First C++ Program
#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}`}
            setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
        }}/>
        <div className='relative w-full h-full flex bg-bg-3 rounded-md'>
            <button className='text-secondary hover:text-opacity-75 duration-200 absolute  bottom-2 right-2'><BsPlayCircleFill className="text-4xl"/></button>

        </div>
    </div>
  )
}

export default Editor