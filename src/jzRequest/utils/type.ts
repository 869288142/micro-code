/**
 *  判断是否是对象
 * @description isObject
 * @param {*} val val
 * @return { Boolean } boolean
 */
function isObject(val : unknown) : val is Record<string, unknown> {
    return val !== null && typeof val === 'object';
}
/**
 *  判断是否是数组
 * @description isArray
 * @param {*} val val
 * @return { Boolean } boolean
 */
function isArray<T>(val: unknown) : val is Array<T> {
    return Array.isArray(val);
}
/**
 *  判断是否是日期对象
 * @description isDate
 * @param {*} val val
 * @return { Boolean } boolean
 */
function isDate(val :unknown) : val is Date {
    return toString.call(val) === '[object Date]';
}

export { isObject, isArray, isDate };
