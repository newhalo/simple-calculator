import React, { useCallback, useEffect, useRef } from 'react'

import './Result.css'

const Result = ({ value }) => {

    const wrapperRef = useRef()
    const textRef = useRef()

    const handleFormat = (num) => {
        try {
            return Number(num).toLocaleString() + (num.endsWith('.') ? '.' : '');
        } catch (error) {
            return 'Error'
        }
    }

    const getFontSize = () => {
        return parseFloat(
            window
                .getComputedStyle(textRef.current, null)
                .getPropertyValue("font-size")
        );
    }

    const reduceFontSize = useCallback(() => {
        if (wrapperRef.current && textRef.current &&
            wrapperRef.current.clientWidth <=
            (textRef.current.clientWidth || textRef.current.offsetWidth) + 40
        ) {
            textRef.current.style.fontSize = (getFontSize() - 10) + 'px';
            return reduceFontSize();
        }
    }, [wrapperRef, textRef])

    const resetFontSize = () => {
        textRef.current.style.fontSize = 83 + 'px';
    }

    useEffect(() => {
        if(!process.env.REACT_APP_TESTING){
            resetFontSize();
            reduceFontSize();
        }
    }, [value, reduceFontSize])

    return (
        <div ref={wrapperRef} id="display" className="outputScreen">
            <div className="circles">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
            </div>
            <div className="result">
                <span ref={textRef} style={{ fontSize: 83 }}>
                    {isNaN(value) ? 'Error' : value === 'Infinity' ? 'Error' : handleFormat(value)}
                </span>
            </div>
        </div>
    )
}

export default Result