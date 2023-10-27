import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react'

const InlineCode = (props:any) => {
  return (
    <span className='px-1 bg-gray-900 rounded-md text-green-300 w-min'>{props.text}{props.children}</span>
  )
}

export default InlineCode