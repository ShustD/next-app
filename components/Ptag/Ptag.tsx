import { PtagProps } from "./Ptag.props"
import s from './Ptag.module.scss'
import cn from 'classnames'

export const Ptag = ({size = 'medium', children}:PtagProps):JSX.Element=> {
    return (
        <p className={cn(s.text, {
            [s.small]: size === 'small',
            [s.medium]: size === 'medium',
            [s.large]: size === 'large',
        })}>
            {children}
        </p>
    )
}