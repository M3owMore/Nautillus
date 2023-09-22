import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react'

const Code = (props:any) => {
  return (
    <SyntaxHighlighter language={props.language} style={coldarkDark} className=" rounded-2xl text-xs">
      {props.text}{props.children}
    </SyntaxHighlighter>
  )
}

export default Code