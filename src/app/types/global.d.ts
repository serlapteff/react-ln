declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    // import React from "react";
    // const content: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default content;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";


declare const __IS_DEV__: boolean;
