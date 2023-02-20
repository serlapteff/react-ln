import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button, ButtonSize, ButtonVariant } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ButtonVariant.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    theme: ButtonVariant.OUTLINE
}

export const OutlineL = Template.bind({})
OutlineL.args = {
    children: 'Text',
    theme: ButtonVariant.OUTLINE,
    size: ButtonSize.L
}

export const OutlineXL = Template.bind({})
OutlineXL.args = {
    children: 'Text',
    theme: ButtonVariant.OUTLINE,
    size: ButtonSize.XL
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Text',
    theme: ButtonVariant.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
    children: 'Text',
    theme: ButtonVariant.BACKGROUND
}

export const BackgroundInvert = Template.bind({})
BackgroundInvert.args = {
    children: 'Text',
    theme: ButtonVariant.BACKGROUND_INVERT
}

export const Squire = Template.bind({})
Squire.args = {
    children: '›',
    theme: ButtonVariant.BACKGROUND_INVERT,
    squire: true
}
//
// export const SizeM = Template.bind({})
// SizeM.args = {
//     children: '›',
//     theme: ButtonVariant.BACKGROUND_INVERT,
//     size: ButtonSize.M,
//     squire: true
// }

export const SquireSizeL = Template.bind({})
SquireSizeL.args = {
    children: '›',
    theme: ButtonVariant.BACKGROUND_INVERT,
    size: ButtonSize.L,
    squire: true
}

export const SquireSizeXL = Template.bind({})
SquireSizeXL.args = {
    children: '›',
    theme: ButtonVariant.BACKGROUND_INVERT,
    size: ButtonSize.XL,
    squire: true
}
