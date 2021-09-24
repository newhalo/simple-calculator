import React, { useCallback, useEffect, useRef } from 'react'
import { TextView, Wrapper } from '../../components/elements';

import './Result.css'

const fontSizeBase = 83;

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

    const reduceFontSize = useCallback((fontSize = fontSizeBase) => {
        if (fontSize > 0 && wrapperRef.current && textRef.current &&
            wrapperRef.current.clientWidth <=
            (textRef.current.clientWidth || textRef.current.offsetWidth) + 40
        ) {
            fontSize = (getFontSize() - 10)
            textRef.current.style.fontSize = fontSize + 'px';
            return reduceFontSize(fontSize);
        }
    }, [wrapperRef, textRef])

    const resetFontSize = () => {
        textRef.current.style.fontSize = fontSizeBase + 'px';
    }

    useEffect(() => {
        resetFontSize();
        reduceFontSize();
    }, [value, reduceFontSize])

    return (
        <Wrapper ref={wrapperRef} id="display" className="outputScreen">
            <div className="circles">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
            </div>
            <div className="result">
                <TextView
                    ref={textRef}
                    style={{ fontSize: fontSizeBase }}
                    value={isNaN(value) ? 'Error' : value === 'Infinity' ? 'Error' : handleFormat(value)}
                />
            </div>
        </Wrapper>
    )
}

export default Result