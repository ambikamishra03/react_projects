// import React from 'react'

// const Change_HTML_to_JSX = () => {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className='photo'/>
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve the spectrum technology</li>
//       </ul>
//     </>
//   )
// }

// export default Change_HTML_to_JSX


/* <h1>Hedy Lamarr's Todos</h1>
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  class="photo"
>
<ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
</ul> */







export default function Bio() {
    return (
        <>    
    <div class="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br/>
        <b>And <i>pictures</i></b> of scientists!
      </p>
      </>

    );
  }