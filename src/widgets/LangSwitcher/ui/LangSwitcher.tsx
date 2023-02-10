import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC } from 'react'

interface LangSwitcherProps {
  className?: string
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then(r => r).catch(e => { console.log(e) })
  }

  return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
            className={classNames(cls.LangSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
  )
}
