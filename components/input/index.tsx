import styles from './styles.module.scss'
import cn from 'classnames';
import { InputHTMLAttributes } from 'react';



const Input = ({ className, value, placeholder, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <>
            <input className={cn(styles.input, className)} placeholder={placeholder} value={value} {...props} />
        </>
    )
}

export default Input