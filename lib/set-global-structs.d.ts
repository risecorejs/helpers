declare global {
    var $structs: {
        [key: string]: any;
    };
}
/**
 * SET-GLOBAL-STRUCTS
 * @param dir {string?}
 * @return {void}
 */
export default function (dir?: string): void;
