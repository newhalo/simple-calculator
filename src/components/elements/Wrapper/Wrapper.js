import React from 'react'
import { clsx } from '../../../utils'

import './Wrapper.css'

const Wrapper = ({
    onClick,
    children,
    className,
    ...restProps
}, ref) => {

    return (
        <div {...restProps} ref={ref} className={clsx('wrapper', className)}>{children}</div>
    )
}

export default React.forwardRef(Wrapper)