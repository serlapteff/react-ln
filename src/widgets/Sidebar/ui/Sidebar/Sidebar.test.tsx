import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import ComponentRender from 'shared/lib/tests/ComponentRender/ComponentRender'

describe('Sidebar', function () {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('Sidebar toggle', () => {
        ComponentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        // screen.debug()
    })
})
