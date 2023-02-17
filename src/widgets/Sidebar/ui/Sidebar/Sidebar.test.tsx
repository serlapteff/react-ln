import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', function () {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('Sidebar toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        // screen.debug()
    })
})
