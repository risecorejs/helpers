/**
 * SET-GLOBAL-STRUCTS
 * @param dir {string?}
 * @return {void}
 */
export default function (dir?: string): void;
declare global {
    export var $structs: {
        [key: string]: any;
    };
}
