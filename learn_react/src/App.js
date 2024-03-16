
import ConditionalRendering from './Components/ConditionalRendering';
import LearnJsx from './Components/LearnJsx';
import UpdateScreenByStates from './Components/UpdateScreenByStates';
import RespondingToEvents from './Components/RespondingToEvents';
import RenderingList from './Components/RenderingList';
import { useState } from 'react';
import SharingDataInComponents from './Components/SharingDataInComponents'
import Components from './Components/Practice';

function App() {
  const [count,setCount] = useState(0)

  const handleClick = () =>{
    setCount(count+1);
  }
  return (
    <>
      <div style={{margin:'10px',padding:'10px'}}>
      <Components/> 
          <LearnJsx/>
          <ConditionalRendering/>
          <RenderingList/>
          <RespondingToEvents/>
          <UpdateScreenByStates/>
           <UpdateScreenByStates/>    {/* here the counts of each button increases independently  */}
           
         <SharingDataInComponents count={count} onClick={handleClick}/>
           <SharingDataInComponents count={count} onClick={handleClick}/>
      </div>
    </>
  );
}

export default App;
