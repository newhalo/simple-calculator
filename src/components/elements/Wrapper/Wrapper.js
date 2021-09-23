import React from 'react'
import { clsx } from '../../../utils'

import './Wrapper.css'

const Wrapper = ({
    onClick,
    children,
    className,
    ...restProps
}) => {

    return (
        <div {...restProps} className={clsx('wrapper', className)}>{children}</div>
    )
}

export default Wrapper