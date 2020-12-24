/**
 *
 *  判断是否为绝对路径
 * @export
 * @param {String} url url
 * @return {Boolean} 是否为绝对路径
 */
export function isAbsoluteURL(url : string | undefined) : boolean {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    if (typeof url === 'string') {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    } else {
      return false
    }
}
