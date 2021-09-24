import React from 'react'
import { clsx } from '../../../utils'

import './TextView.css'

const TextView = ({
    onClick,
    value,
    className,
    ...restProps
}, ref) => {

    return (
        <span {...restProps} ref={ref} className={clsx('txt', className)}>{value}</span>
    )
}

export default React.forwardRef(TextView)