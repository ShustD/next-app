import { RatingProps } from "./Rating.props"
import s from './Rating.module.scss'
import Star from './star.svg'
import cn from 'classnames'
import { useEffect, useState } from "react"

export const Rating = ({ isEditable, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
    
    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
            
            return (
                <Star
                    className={cn(s.star, {
                        [s.filled]: i < currentRating,
                        [s.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplayRating(i + 1)}
                    onMouseLeave={() => changeDisplayRating(rating)}
                    onClick={() => onclick(i + 1)}
                />
            )
        })
        setRatingArray(updateArray)
    }

    const changeDisplayRating = (i: number) => {
        isEditable ? constructRating(i) : null         
    }
    const onclick = (i: number) => {
        if (!isEditable || !setRating) {
            return
        }
       setRating(i)
    }
    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    )
}