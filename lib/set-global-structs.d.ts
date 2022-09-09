/**
 * SET-GLOBAL-STRUCTS
 * @param dir {string?}
 */
export default function (dir?: string): void;
declare global {
    export var $structs: {
        [key: string]: any;
    };
}
