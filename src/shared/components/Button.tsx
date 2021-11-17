import {ReactNode, ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: ReactNode;
    color?: 'danger' | 'success' | 'warning' | 'white' | 'black'
    size?: 'small' | 'large' | 'default';
}

function Button(props: ButtonProps) {
    const { label, color, size } = props;
    return (<button className={`btn btn-color-${color}  btn-size-${size}`} {...props}>
        {label}
    </button>);
}

Button.defaultProps = {
    color: 'black',
    size: 'default'
}

export default Button;
