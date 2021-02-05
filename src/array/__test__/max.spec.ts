function max(arr: any): any {
  return Math.max(...arr)
}

describe('array/max', () => {
  const orign = [1, 3, 1]
  it('array/max-最大值', () => {
    expect(max(orign)).toBe(3)
  })
})
