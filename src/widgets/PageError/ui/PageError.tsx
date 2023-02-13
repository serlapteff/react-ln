
import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}
export const PageError: FC<PageErrorProps> = ({ className = '' }) => {
    const { t } = useTranslation()

    const reload = (): void => {
        window.location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Что-то пошло не так.')}</h1>
            <Button onClick={reload}>{t('Обновить страницу')}</Button>
        </div>
    )
}
