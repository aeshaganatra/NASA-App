import React, { useState } from 'react';
import { Wrapper, StyleWrapper } from './Button.style';

const Button = ({ text, callback, styleButton }) => {
    const initState = '#353535';
    const [backgroundState, setBackgroundState] = useState(initState)

    const colorChange = (callback) => {
        callback();
        setBackgroundState('#1C1C1C');
        setTimeout(() => {
            setBackgroundState(initState);
        }, 1000);
    }


    if (styleButton) {
        return (
            <StyleWrapper
                type='button'
                onClick={() => { colorChange(callback) }}
                style={{
                    background: backgroundState
                }}
            >
                <p> {text} </p>
            </StyleWrapper>
        );
    }

    return (
        <Wrapper
            type='button'
            onClick={callback}
        >
            {text}
        </Wrapper>
    )
};

export default Button;
