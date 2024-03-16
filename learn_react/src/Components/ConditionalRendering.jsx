import React from 'react'

const ConditionalRendering = () => {


    // if we have pages to render based on condition 
    // let content;
    // if (isLoggedIn) {
    //   content = <AdminPanel />;
    // } else {
    //   content = <LoginForm />;
    // }
    // return (
    //   <div>
    //     {content}
    //   </div>
    // );



    // more compact form 
//     <div>
//   {isLoggedIn ? (
//     <AdminPanel />
//   ) : (
//     <LoginForm />
//   )}
// </div>


// without else branch 
//  <div>
 //   {isLoggedIn && <AdminPanel />}
// </div> 



    const loggedIn = false;
    const user = "Ambika"
    return (
    loggedIn ? <h3>{user} is logged in.</h3>:<h3>{user} is not logged in.</h3>
    )
}

export default ConditionalRendering



// In React, you control branching logic with JavaScript.
// You can return a JSX expression conditionally with an if statement.
// You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
// In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
// In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
// The shortcuts are common, but you don’t have to use them if you prefer plain if.