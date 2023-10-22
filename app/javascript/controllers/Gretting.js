import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessageFromAPI } from './greeting_slice';

// import { updateMessage } from './greeting_slice';

function Gretting() {
  const message = useSelector((state) => state.greeting);
  const dispatch = useDispatch();  

  return (
    <div>    
      <div>{message}</div>
      <h4> reload the page to get a new random gretting </h4>
    </div>
  )
}

export default Gretting