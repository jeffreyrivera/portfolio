import React from "react"
import ReactMarkdown from "react-markdown"
import CodeBlock from './CodeBlock'

const RenderedMarkdown = ({ content }) => (
  <ReactMarkdown
    source={content}
    renderers={{ code: CodeBlock }}
  />
)

export default RenderedMarkdown;