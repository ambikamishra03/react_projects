import React, {useState} from 'react'

const UpdateScreenByStates = () => {
    const [count, setCount] = useState(0)   // useState is a built-in Hook provided by React

    const handleClick  = () =>{
       setCount(count+1)
    }
  return (
 
      <button
      onClick={handleClick}
      style={{backgroundColor:'green',width:'115px',height:'35px',margin:'15px',border:'none',color:'white',cursor:'pointer'}}
      >Count {count} times</button>

  )
}

export default UpdateScreenByStates
