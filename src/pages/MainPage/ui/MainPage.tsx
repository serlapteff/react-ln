import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
// import { BugButton } from 'app/providers/ErrorBoundary'

const MainPage: FC = () => {
    const { t } = useTranslation('mainPage')
    return (
        <div>
            {/* <BugButton/> */}
            {t('Главная страница')}
        </div>
    )
}

export default MainPage
