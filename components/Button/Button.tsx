import { ButtonProps } from "./Button.props"
import s from './Button.module.scss'
import cn from 'classnames'


export const Button = ({children, appearance, ...props} :ButtonProps):JSX.Element=> {
    return (
        <button className={cn(s.button, {
            [s.primary]: appearance === 'primary',
            [s.ghost]: appearance === 'ghost',
        })}
        {...props}>
            {children}
        </button>
    )
}