import React from 'react'
import {useSelector} from "react-redux"
import ComponentsTwo from './ComponentsTwo'
import ComponentsThree from './ComponentsThree'

const ComponentsOne = () => {
    const {value}=useSelector((state)=>state.counter)
  return (
    <div className=" space-y-5 m-10">
      <h1 className="text-3xl font-bold mb-4">Count: {value}</h1>
      <ComponentsTwo />
      <ComponentsThree />
    </div>
  );
}

export default ComponentsOne