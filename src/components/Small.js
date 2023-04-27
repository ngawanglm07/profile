import React from 'react'


function Small(props) {

  return (
    <div className='smallCards'>
      <img src={props.img} className="card-image"></img>
    </div>
  )
}

export default Small
