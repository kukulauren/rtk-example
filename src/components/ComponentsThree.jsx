import React from 'react'
import { useDispatch } from "react-redux";
import { decrease, increasePayload } from '../store/Slice/counter.slice';


const ComponentsThree = () => {
    const dispatch = useDispatch();
    const handleIncreasePayload=() => {
        dispatch(increasePayload(3)) 
    }
    const handleDecrease = () => {
      dispatch(decrease());
    };
  return (
    <div className="">
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md"
        onClick={handleIncreasePayload}
      >
        Increase with payload
      </button>
      <div className="">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={handleDecrease}
          
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default ComponentsThree