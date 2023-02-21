import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '../../../config/i18n/i18nForTests'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export interface ComponentRenderOptions {
    route?: string
}

const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}): ReactNode => {
    const { route = '/' } = options
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}

export default ComponentRender
