import React from 'react'
import './Header.css'

const Header = ({modeCheck, setmodeCheck, handleTogglewhiteMode}) => {
    let ModeValue = ['Listening Mode', 'Speaking Mode']
    const handleSaveNote = () => {
        setmodeCheck((prev)  => !prev)
    }

    return (
        <div className="header">
            <div className="header__left">
                <div className='header__left--name'>Notes</div>
                <button className='header__left--button'>Play Button</button>
            </div>
            <div className="header__right">
                <button onClick={()=> handleTogglewhiteMode((previousWhiteMode) => !previousWhiteMode)}className="save">Toggle Mode</button>    
                <button onClick={handleSaveNote} className='header__right'>
                    {ModeValue[modeCheck ? 1: 0]}
                </button>
            </div>
        </div>
    )
}

export default Header