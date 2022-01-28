import CodeEditor from '@uiw/react-textarea-code-editor';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Question5() {
  const [code, setCode] = React.useState(
    `class Solution {
        public int maximalRectangle(char[][] matrix) {
            
        }
    }`
  );
  return (
    <>
    <div class="b-example-divider" style={{paddingTop: 5}}></div>
    <nav class="nav nav-underline" >
        <a class="nav-link active text-black" href="./Dashboard">Dashboard</a>
          </nav>
    <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="https://images.emojiterra.com/google/android-11/512px/1fa99.png" alt="" width="72" height="72"/>
        <h2>Question Five</h2>
        <Container>
        <p class="lead"> Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area. </p>
      </Container>
      </div>
    <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter Java code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
    <Button variant="light">Submit</Button>
    </>
  );
}

export default Question5