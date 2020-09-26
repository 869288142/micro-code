/**
 * @param arr
 * @returns 返回乱序后的数组
 * @description
 * 数组乱序
 */
export function shuffle<T extends unknown[]>(arr: T): T {
  let randomIndex
  for (let i = arr.length; i; i--) {
    // 生成j范围为 [0,i)，然后向下取整
    randomIndex = Math.floor(Math.random() * i);
[arr[i - 1], arr[randomIndex]] = [arr[randomIndex], arr[i - 1]]
  }
  return arr
}
