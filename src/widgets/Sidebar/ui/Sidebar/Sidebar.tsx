import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { type FC, useState } from 'react'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RouthPath } from 'shared/config/routerConfig/routerConfig'
import IconHome from 'shared/assets/icons/icon-home-page.svg'
import IconAbout from 'shared/assets/icons/icon-about-page.svg'

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()
    const toggle: VoidFunction = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid='sidebar-toggle'
                onClick={toggle}
                className={cls.collapsedBtn}
                theme={ButtonVariant.BACKGROUND_INVERT}
                squire
                size={ButtonSize.XL}
            >
                {collapsed ? '›' : '‹'}
            </Button>
            <div className={cls.navItems}>
                <AppLink
                    className={cls.navItem}
                    theme={AppLinkTheme.PRIMARY}
                    to={RouthPath.main}
                >
                    <IconHome className={cls.icon}/>
                    <span>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    className={cls.navItem}
                    theme={AppLinkTheme.PRIMARY}
                    to={RouthPath.about}
                >
                    <IconAbout className={cls.icon}/>
                    <span>{t('О компании')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.langSwitcher} />
            </div>
        </div>
    )
}
