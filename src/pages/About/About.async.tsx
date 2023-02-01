import {lazy} from "react";

// export const AboutAsync = lazy(()=> import('./About'))

export const AboutAsync = lazy(()=> new Promise(resolve=> {
    // @ts-ignore
    setTimeout(()=> resolve(import('./About')), 1500)
}))
