
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}
export const NotFoundPage: FC<NotFoundPageProps> = ({ className = '' }) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <div>{t('Страница не найдена')}</div>
        </div>
    )
}
