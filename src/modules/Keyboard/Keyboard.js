import React from 'react'
import { Wrapper } from '../../components/elements'
import { KEYBOARD_LAYOUT_BUTTONS } from '../../constants/Defined'
import KeyboardButton from './KeyboardButton'

import './Keyboard.css'

const Keyboard = ({ onButtonClick, clearable = false }) => {

    return (
        <Wrapper className="keyboard">
            {KEYBOARD_LAYOUT_BUTTONS.map(({ id, ...btnParams }) => (
                <KeyboardButton key={id} {...btnParams} clearable={clearable} onClick={onButtonClick} />
            ))}
        </Wrapper>
    )
}

export default Keyboard