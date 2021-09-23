import React, { useCallback, useEffect, useState } from 'react'
import { Wrapper } from '../../components/elements'
import CalculateEngine from '../../models/CalculateEngine'
import Keyboard from '../Keyboard'
import Result from '../Result'

import './Calculator.css'

const Calculator = () => {

    const [display, setDisplay] = useState('0');
    const [engine, setEngine] = useState(new CalculateEngine());
    const [clearable, setClearable] = useState(engine.clearable);

    const handleButtonClick = useCallback((value) => {
        setDisplay(engine.calculate(value));
        setClearable(engine.clearable)
    }, [engine])

    useEffect(() => {
        setDisplay('0')
        setEngine(new CalculateEngine());
    }, [])

    return (
        <Wrapper className="calculator">
            <Result value={display} />
            <Keyboard calculateEngine={engine} clearable={clearable} onButtonClick={handleButtonClick} />
        </Wrapper>
    )
}

export default Calculator