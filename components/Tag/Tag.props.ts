import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'small' | 'medium'
    color?: 'ghost' | 'green' | 'red' | 'primary'
    href?: string
    children: ReactNode
 }