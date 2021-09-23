import React, { useCallback, useMemo } from 'react'
import { EqualButton, OperatorButton, ToggleButton, ClearButton } from '../../components/commons'
import { Button } from '../../components/elements'
import { BUTTON_TYPE, CLEAR_BUTTON_STATES } from '../../constants/Defined'

const KeyboardButton = ({
    id,
    type = BUTTON_TYPE.NUMBER,
    label = '',
    value = null,
    className,
    clearable = false,
    onClick = () => { },
}) => {

    const ButtonComponent = useMemo(() => {
        switch (type) {
            case BUTTON_TYPE.EQUAL:
                return EqualButton
            case BUTTON_TYPE.OPERATOR:
                return OperatorButton
            case BUTTON_TYPE.TOGGLE:
                return ToggleButton
            case BUTTON_TYPE.CLEAR:
                return ClearButton
            default:
                return Button;
        }
    }, [type])

    const onButtonClick = useCallback(() => {
        const returnValue = type === BUTTON_TYPE.CLEAR && clearable ? CLEAR_BUTTON_STATES.CLEAR.value : value
        return onClick(returnValue)
    }, [value, onClick, clearable, type])

    return (
        <ButtonComponent clearable={clearable} key={id} className={className} onClick={onButtonClick}>
            {label}
        </ButtonComponent>
    )
}

export default KeyboardButton