import React from 'react';
import {btn} from './Button.module.scss';
interface ButtonProps {
    label? : string,
}
const Button: React.FC<ButtonProps> = ({label}) => {
    return (
        <button
        className={btn}
        onClick={() => alert('I am styled with CSS Modules')}
    >
        I am button 2 - Press You
    </button>
    )
};

export default Button;