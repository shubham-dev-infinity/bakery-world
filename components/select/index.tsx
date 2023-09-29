import { SelectProps } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import styles from './styles.module.scss'

type TOption = {
    label: string;
    value: string;
}

type selectDefinedTypes = {
    children?: React.ReactNode;
    className?: string;
    options: TOption[];
    value: string;
    onChange: (event: SelectChangeEvent<string>, child?: React.ReactNode) => void
}

type TSelect = selectDefinedTypes & Omit<SelectProps, keyof selectDefinedTypes>;


const Select = ({ children, className, options, value, onChange, ...rest }: TSelect) => {
    return (
        <>
            <select className={styles.select}>
                {
                    options.map(({ value, label }) => <option value={value}>{label}</option>)
                }
            </select>
        </>
    )
}

export default Select