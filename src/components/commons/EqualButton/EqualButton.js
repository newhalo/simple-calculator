import React from 'react'
import { clsx } from '../../../utils'
import { Button } from '../../elements'

import './EqualButton.css'

const EqualButton = ({
    onClick,
    children,
    className,
    ...restProps
}) => {

    return (
        <Button {...restProps} onClick={onClick} className={clsx('btn-equal', className)}>{children}</Button>
    )
}

export default EqualButton