/**
 *
 *  http请求编码
 * @param {*} val 字符串
 * @return { string } 编码后的字符串
 */
function encode(val :string) : string {
    return encodeURIComponent(val)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}

export { encode };
