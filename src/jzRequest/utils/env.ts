/**
 *
 * 判断是否在浏览器环境
 * @export
 * @return {Boolean} inBrowser
 */
export function inBrowser() : boolean {
    return typeof window !== 'undefined';
}
