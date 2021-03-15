import React from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
//import htmlToDraft from 'html-to-draftjs';
//import PrismCode from './PrismCode';
import './CodeEditor.css';


class CodeEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(), textLines : [],
        };
      }

    //controllable editor usign editorState
    onEditorStateChange = (editorState) => {
        const contentState = editorState.getCurrentContent();
        //console.log('content state', JSON.stringify({content: convertToRaw(contentState).blocks.length,}));
        
        const lines = this.getText(convertToRaw(contentState).blocks);
        console.log('content state1',draftToHtml(convertToRaw(editorState.getCurrentContent())));
        console.log('content state2', lines);
        this.setState({
            editorState, textLines: lines,
        });


    };

    getText = (lines) =>{
        let allLines = lines.map((line) => {
            return line.text 
        });
        return allLines
    };
    render () {
        const { editorState } = this.state; 
        const code = this.state.textLines.map(line => `${line}`).join('\n')

        return (
            <div className="ui container codeEditor">
                <header className="codeEditor-header">
                    Rich Text Editor Example
                </header>
                <Editor
                    toolbarHidden
                    editorState={editorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
 
        );
    }
}


