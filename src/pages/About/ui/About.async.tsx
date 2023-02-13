import { lazy } from 'react'

// export const AboutAsync = lazy(()=> import('./About'))

export const AboutAsync = lazy(async () => await new Promise(resolve => {
    setTimeout(() => { resolve(import('./About').then(r => r).catch(e => e)) }, 1500)
}))
