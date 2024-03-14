import React from 'react'

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
      <div style={{width:'300px',height:'100px',marginTop:'20px',display:'flex',padding:'20px',
      backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
           <h3>{user.name}</h3>
           <img src={user.imageUrl} alt={'Photo of' + user.name} style={{
            height:user.imageSize,
            width:user.imageSize,
            padding:'15px',
            borderRadius:'24px'
           }} />
      </div>
    </>
  )
}

export default LearnJsx
