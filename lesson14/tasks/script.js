/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */

// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { exceedsLimit } = require('prettier');

//====================task1===================
// 'use strict';
// let message = 'Just learn it!';
// export function sendMessage(name) {
//   const sender = 'Gromcode';
//   console.log(`${name}, ${message} Your ${sender}`);
// }

// export function setMessage(text) {
//   message = text + '!';
// }

// sendMessage('Ann');
//===================task2==============
// 'use strict';

// /**
//  * @return {object}
//  */
// export default function createMessenger() {
//   let message = 'Just learn it';
//   let sender = 'Gromcode';

//   function setMessage(text) {
//     message = text;
//   }
//   function setSender(senderName) {
//     sender = senderName;
//   }
//   function sendMessage(name) {
//     console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`);
//   }
//   return {
//     setMessage,
//     setSender,
//     sendMessage,
//   };
// }

// // examples
// const messanger1 = createMessenger();
// messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

// const messanger2 = createMessenger();
// messanger2.setMessage('You are learning JS and you do it well');
// messanger2.sendMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

// const messanger3 = createMessenger();
// messanger3.setMessage('The weather is amazing today');
// messanger3.setSender('Anna');
// messanger3.sendMessage('Alex'); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna
//=============================task3==============================
// let number = 0;
// export const add = n1 => (number += n1);
// export const decrease = n2 => (number -= n2);
// export const reset = () => (number = 0);
// export const getMemo = () => number;
