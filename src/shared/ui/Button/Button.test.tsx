import { render, screen } from '@testing-library/react'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'

describe('Button', function () {
    test('Render button', () => {
        // expect(classNames('someClass')).toBe('someClass')
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
    test('Render button theme clear', () => {
        // expect(classNames('someClass')).toBe('someClass')
        render(<Button theme={ButtonVariant.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
        screen.debug()
    })
})
