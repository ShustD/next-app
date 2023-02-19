import { TagProps } from "./Tag.props"
import s from './Tag.module.scss'
import cn from 'classnames'

export const Tag = ({ size = 'medium', className, color = 'ghost', href, children, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn(s.tag, className, {
            [s.small]: size === 'small',
            [s.medium]: size === 'medium',
            [s.ghost]: color === 'ghost',
            [s.red]: color === 'red',
            [s.green]: color === 'green',
            [s.primary]: color === 'primary',
        })}
            {...props}>
            {href
                ?
                <a href={href}>{children}</a>
                :
                <>{children}</>
            }
        </div>
    )
}