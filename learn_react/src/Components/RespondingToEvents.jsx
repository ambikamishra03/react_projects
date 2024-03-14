import React from 'react'

const RespondingToEvents = () => {
    
    const handleClick1  = () =>{
        document.body.style.backgroundColor = "red"
    }
    const handleClick2  = () =>{
        document.body.style.backgroundColor = "gray"
    }
  return (
    <div>
      <button
      onClick={handleClick1}
    //   Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to 
    // pass it down. React will call your event handler when the user clicks the button.
      style={{backgroundColor:'blue',width:'65px',height:'35px',margin:'15px',border:'none',color:'white',cursor:'pointer'}}
      >click 1</button>
      <button
      onClick={handleClick2}
      style={{backgroundColor:'blue',width:'65px',height:'35px',margin:'15px',border:'none',color:'white',cursor:'pointer'}}
      >click 2</button>
      <button
      onClick={()=> document.body.style.backgroundColor = "white"}
      style={{backgroundColor:'blue',width:'65px',height:'35px',margin:'15px',border:'none',color:'white',cursor:'pointer'}}>
      Refresh</button>
    </div>
  )
}

export default RespondingToEvents
