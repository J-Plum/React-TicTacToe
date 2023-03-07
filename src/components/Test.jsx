import React, { useRef, useState } from "react";

export default function Test() {
  const [value, setValue] = useState("");
  const [listArray, setListArray] = useState(['haha','hoho']);

  const inputRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setValue(e.target.current.value);
    // setListArray(prev =>{
    //   return [...prev, value];
    // })

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          // onChange={(e)=>{setValue(e.target.value)}}
          ref={inputRef}
        />
        <button type="submit">add</button>
        <ul>
          {
            listArray.map((e)=>{
              return <li>{e}</li>
            })
          }
        </ul>
      </form>
    </>
  );
}
