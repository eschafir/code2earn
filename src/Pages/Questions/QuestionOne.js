import CodeEditor from '@uiw/react-textarea-code-editor';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Question1() {
  const [code, setCode] = React.useState(
    `class Solution {
      public int[] twoSum(int[] nums, int target) {
          
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
        <h2>Question One</h2>
        <Container>
        <p class="lead">Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.</p>
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

export default Question1