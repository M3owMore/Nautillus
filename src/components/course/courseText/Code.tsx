import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react'

const Code = (props:any) => {
  return (
    <SyntaxHighlighter language={props.language} style={coldarkDark} className=" rounded-2xl">
      {props.text}
    </SyntaxHighlighter>
  )
}

export default Code