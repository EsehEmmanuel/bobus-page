import React from 'react'

const Forminput = (props) => {
  return (
    <div>
        <input 
        type={props.type}
        value={props.value}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
        />
    
    </div>
  )
}

export default Forminput