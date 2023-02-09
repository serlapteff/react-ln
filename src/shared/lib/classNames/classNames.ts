
type Mods = Record<string, boolean>

export function classNames(cls: string, mods?: Mods, otherCls?: string[]): string {
    const modsCls = Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)

    // const modsCls = Object.entries(mods)
    //     .reduce((clss, [key, value]) => !!value ? clss = [...clss, key] : clss, [])

    return [
        cls,
        ...modsCls,
        ...otherCls.filter(Boolean)

    ].join(' ')
}

