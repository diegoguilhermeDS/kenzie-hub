import React from 'react'
import { StyledButtonPrimary } from './style'

const Button = ({children, disabled, typeBtn, onclick}) => {
    if(typeBtn === "primary") {
        return (
            <StyledButtonPrimary disabled={disabled}>{children}</StyledButtonPrimary>
        )
    } else {
        return (
            <button onClick={onclick}>{children}</button>
        )
    }
}

export default Button