import React from 'react'
import {useDispatch} from "react-redux"
import { increase } from '../store/Slice/counter.slice';

const ComponentsTwo = () => {
    const dispatch=useDispatch();
    const handleIncrease=() => {
        dispatch(increase()) 
    }
  return (
    <div className="">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        onClick={handleIncrease}
      >
        Increase
      </button>
    </div>
  );
}

export default ComponentsTwo