import React from 'react'

const SharingDataInComponents = ({count,onClick}) => {
  return (
 
    <button
    onClick={onClick}
      style={{backgroundColor:'blue',width:'115px',height:'35px',margin:'15px',border:'none',color:'white',cursor:'pointer'}}>
      Count {count} times
    </button>
 
  )
}

export default SharingDataInComponents
