import React from 'react'


const Button = ({ name, ...otherProps}) => (
    <button {...otherProps}>
        { name }
    </button>
)

export default Button