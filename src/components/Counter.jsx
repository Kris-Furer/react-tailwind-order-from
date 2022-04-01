import { useState } from "react";
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'
function Counter() {
  const [count, setCount] = useState(0);

let message

  const handleCount = (e, message) => {
   
     if
    (e.target.classList.contains("increase")) {
      setCount(count + 1);
      console.log(count)
    } if (e.target.classList.contains("decrease")) {
        setCount(count - 1);  
    }  if (count === 0 && e.target.classList.contains("decrease")){
            setCount(count + 0)
        }
  };



  return (
   
    <div className="">
      <div className="controls flex items-baseline">
        
      <button
          onClick={handleCount}
          className="p-3 decrease bg-slate-500">
            <FaAngleDown className="decrease"/>
        </button>

        <p className="px-3">{count}</p>

        <button
          className="p-3 increase bg-slate-500"
          onClick={handleCount}>
            <FaAngleUp className="increase"/>
        </button>
  
        
       
        
      
      </div>
      <p>{message}</p>
    </div>
    
  );
}

export default Counter;
