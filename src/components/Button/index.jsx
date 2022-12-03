import React from 'react'
import { StyledButtonPrimary } from './style'

const Button = ({children, disabled, typeBtn}) => {
    if(typeBtn === "primary") {
        return (
            <StyledButtonPrimary disabled={disabled}>{children}</StyledButtonPrimary>
        )
    } else {
        return (
            <button>{children}</button>
        )
    }
}

export default Button