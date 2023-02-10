import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
  className?: string
}
export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation('translation')
  return (
        <div className={classNames(cls.NavBar, {}, [className])}>

            <div className={cls.links}>
                <AppLink className='' theme={AppLinkTheme.PRIMARY} to="/">{t('Главная')}</AppLink>
                |
                <AppLink theme={AppLinkTheme.RED} to="/about">{t('О компании')}</AppLink>
            </div>
        </div>
  )
}
