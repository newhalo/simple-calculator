import React, { useMemo } from 'react'
import { CLEAR_BUTTON_STATES } from '../../../constants/Defined'
import { clsx } from '../../../utils'
import { Button } from '../../elements'

import './ClearButton.css'

const ClearButton = ({
    onClick,
    clearable = false,
    value = CLEAR_BUTTON_STATES.ALL_CLEAR.value,
    className,
    ...restProps
}) => {

    const currentLabel = useMemo(() => clearable ? CLEAR_BUTTON_STATES.CLEAR.label : CLEAR_BUTTON_STATES.ALL_CLEAR.label, [clearable])

    return (
        <Button {...restProps} onClick={() => onClick(value)} className={clsx('btn-clear', className)}>{currentLabel}</Button>
    )
}

export default ClearButton