import React from 'react'
import { clsx } from '../../../utils'
import { Button } from '../../elements'

import './ToggleButton.css'

const ToggleButton = ({
    onClick,
    children,
    className,
    ...restProps
}) => {

    return (
        <Button {...restProps} onClick={onClick} className={clsx('btn-toggle', className)}>{children}</Button>
    )
}

export default ToggleButton