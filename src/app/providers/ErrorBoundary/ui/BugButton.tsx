
import { type FC, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

// Компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
    const { t } = useTranslation()
    const [error, setError] = useState(false)

    const onError = (): void => { setError(true) }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])
    return (
        <Button onClick={onError}>{t('Ошибка')}</Button>
    )
}
