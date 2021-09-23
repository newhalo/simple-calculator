import React from 'react'
import { clsx } from '../../../utils'

import './TextView.css'

const TextView = ({
    onClick,
    value,
    className,
    ...restProps
}) => {

    return (
        <div {...restProps} className={clsx('txt', className)}>{value}</div>
    )
}

export default TextView