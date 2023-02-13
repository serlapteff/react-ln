
import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Spinner.module.scss'

interface SpinnerProps {
    className?: string
}
export const Spinner: FC<SpinnerProps> = ({ className = '' }) => {
    return (
        <div className={classNames(cls.Spinner, {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
