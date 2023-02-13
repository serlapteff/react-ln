import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
    children: ReactNode
}
interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (_: Error): ErrorBoundaryState {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        // logErrorToMyService(error, errorInfo)
        console.error(error, errorInfo)
    }

    render (): ReactNode {
        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return (
                <Suspense fallback=''>
                    <PageError/>
                </Suspense>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
