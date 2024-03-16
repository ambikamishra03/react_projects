import React from 'react'
import "./style.css";

const LearnJsx = () => {
    const name  = "Ambika"
    const user = {
      name: 'Hedy Lamarr',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
  return (
    <>
      <h2>My name is {name}</h2>
      <div className='jsxwrapper'>
           <h3>{user.name}</h3>
           <img src={user.imageUrl} alt={'Photo of' + user.name} style={{height:user.imageSize,width:user.imageSize}} />
      </div>
    </>
  )
}

export default LearnJsx


// The Rules of JSX 
// 1. Return a single root element 2. Close all the tags 3. camelCase all most of the things!
//  (JSX looks like HTML, but under the hood it is transformed 
// into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array.
//  This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.)

// Notes 
// Each React component is a JavaScript function that may contain some markup that React renders into the browser.
//  React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML,
//   but it is a bit stricter and can display dynamic information. The best way to understand this is
//    to convert some HTML markup to JSX markup.


// JSX and React are two separate things. They’re often used together, but you can use them independently of each other.
//  JSX is a syntax extension, while React is a JavaScript library.