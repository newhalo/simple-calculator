import React from 'react'
import { clsx } from '../../../utils'
import { Button } from '../../elements'

import './OperatorButton.css'

const OperatorButton = ({
    onClick,
    children,
    className,
    ...restProps
}) => {

    return (
        <Button {...restProps} onClick={onClick} className={clsx('btn-operator', className)}>{children}</Button>
    )
}

export default OperatorButton