import { PtagProps } from "./Ptag.props"
import s from './Ptag.module.scss'
import cn from 'classnames'

export const Ptag = ({size = 'medium', className, children, ...props}:PtagProps):JSX.Element=> {
    return (
        <p className={cn(s.text, className, {
            [s.small]: size === 'small',
            [s.medium]: size === 'medium',
            [s.large]: size === 'large',
        })}
        {...props}>
            {children}
        </p>
    )
}