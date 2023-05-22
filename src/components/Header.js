import React from 'react'

export default function Header(props) {
  return (
    <header className='header' onClick={props.closeDelete} style={{backgroundColor: `${props.darkStyle}`}}>
        <div className='brand_name'>
            <div><i className="fa-solid fa-burger"></i><span className='macro_master'>Macro<span className='master'>Master</span></span></div>
            <i className="fa-solid fa-gear" onClick={props.handleOptions}></i>
        </div>
    </header>
  )
}
