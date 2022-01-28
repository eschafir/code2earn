import CodeEditor from '@uiw/react-textarea-code-editor';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Question2() {
  const [code, setCode] = React.useState(
    `/**
    * Definition for singly-linked list.
    * public class ListNode {
    *     int val;
    *     ListNode next;
    *     ListNode() {}
    *     ListNode(int val) { this.val = val; }
    *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    * }
    */
   class Solution {
       public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
           
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
        <h2>Question Two</h2>
        <Container>
        <p class="lead">You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
        You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>
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

export default Question2