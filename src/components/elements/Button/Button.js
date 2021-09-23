import React from 'react'
import { clsx } from '../../../utils'

import './Button.css'

const Button = ({
    onClick,
    children,
    className,
    clearable,
    ...restProps
}) => {

    return (
        <button {...restProps} onClick={onClick} className={clsx('btn', className)}>{children}</button>
    )
}

export default Button