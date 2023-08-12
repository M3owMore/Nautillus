import React from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = (props:any) => {
    function onChange(newValue:any) {
        console.log("change", newValue);
    }

  return (
    <div className='flex flex-col w-full h-full'>
        <AceEditor
            style={{width: "100%", height: "100%", background: "#011014"}}
            placeholder="Placeholder Text"
            mode="c_cpp"
            theme="github_dark"
            name="blah2"
            fontSize={14}
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
    </div>
  )
}

export default Editor