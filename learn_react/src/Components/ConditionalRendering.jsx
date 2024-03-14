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
