import cn from 'classnames';
import styles from './styles.module.scss';
import MuiButton, { ButtonProps } from '@mui/material/Button';

//here we define necessary type for our custom button component
type buttonDefinedTypes = {
    children: React.ReactNode;
    className?: string;
}

type TButton = buttonDefinedTypes & Omit<ButtonProps, keyof buttonDefinedTypes>;

// logic start for define button

const Button = ({ children, className, ...props }: TButton) => {
    return (
        <>
            <MuiButton className={cn(styles.button, className)} variant='contained' disableElevation disableRipple {...props}>{children}</MuiButton>
        </>
    )
}

export default Button