import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react'

const InlineCode = (props:any) => {
  return (
    <span className='px-2 py-0.5 bg-gray-900 rounded-xl text-green-300 w-min'>{props.text}</span>
  )
}

export default InlineCode