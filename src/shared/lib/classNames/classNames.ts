
type Mods = Record<string, boolean | undefined>

export function classNames (cls: string = '', mods: Mods = {}, otherCls: string[] = []): string {
    const modsCls = Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className)

    // const modsCls = Object.entries(mods)
    //     .reduce((clss, [key, value]) => !!value ? clss = [...clss, key] : clss, [])

    return [
        cls,
        ...modsCls,
        ...otherCls.filter(Boolean)

    ].join(' ')
}
