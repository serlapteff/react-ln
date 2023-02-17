import { type Story } from '@storybook/react'
import { type Theme, ThemeProvider, useTheme } from 'app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    // const { theme } = useTheme()
    return (
        <ThemeProvider>
            <div className = {`app ${theme}` }>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
}
