import { ButtonProps } from "./Button.props"
import s from './Button.module.scss'
import cn from 'classnames'
import ArrowIcon from './Arrow.svg'



export const Button = ({children, arrow = 'none', appearance, ...props} :ButtonProps):JSX.Element=> {
    return (
        <button className={cn(s.button, {
            [s.primary]: appearance === 'primary',
            [s.ghost]: appearance === 'ghost',
        })}
        {...props}>
            {children}
            {arrow !== 'none' && 
            <span className={cn(s.arrow, {
                [s.right]: arrow === 'right',
                [s.down]: arrow === 'down'
            })}> <ArrowIcon /> </span>}
        </button>
    )
}