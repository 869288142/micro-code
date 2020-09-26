import { remove } from '../remove'

describe('array/remove/exist', () => {
  const orign = ['1', '2', 1]
  const removeItemArr = remove<typeof orign>(orign, 1)
  it('存在item', () => {
    expect(removeItemArr).toStrictEqual([1])
  })
})

describe('array/remove/noExist', () => {
  const orign = ['1', '2', 1]
  const removeItemArr = remove<typeof orign>(orign, 3)
  it('不存在item', () => {
    expect(removeItemArr).toStrictEqual([])
  })
})
