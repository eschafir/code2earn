import CodeEditor from '@uiw/react-textarea-code-editor';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Question3() {
  const [code, setCode] = React.useState(
    `class Solution {
        public int maxArea(int[] height) {
            
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
        <h2>Question Three</h2>
        <Container>
        <p class="lead">You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
        Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store. Notice that you may not slant the container.</p>
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

export default Question3