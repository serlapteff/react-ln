import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', function () {
    test('with first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with others class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1 class2'])).toBe(expected)
    })

    test('with mods true class', () => {
        const expected = 'someClass hover scroll class1 class2'
        expect(classNames('someClass', { hover: true, scroll: true }, ['class1 class2'])).toBe(expected)
    })

    test('with mods false class', () => {
        const expected = 'someClass scroll class1 class2'
        expect(classNames('someClass', { hover: false, scroll: true }, ['class1 class2'])).toBe(expected)
    })

    test('with mods undefined class', () => {
        const expected = 'someClass scroll class1 class2'
        expect(classNames('someClass', { hover: undefined, scroll: true }, ['class1 class2'])).toBe(expected)
    })
})
