import React, { useState } from 'react'

export default function State() {
    // let count = 0;

    // function countIncress(){
    //     count++
    //     console.log(count);
    //     countplace.innerText = count;
    // }

    const [count, setCount] = useState(0);
    const [isOn, setInOn] = useState(false);


  return (
    
    // <div><p className='count-place'>0</p>
    <div>

    {count}
    <button onClick={ () => { setCount(count+1)}}>올려</button>

    <p>현재 온오프 상태 : /* on, off 출력 */ </p>
    <button onClick={토글시키기}>토글버튼</button>
    </div>
  )
}
