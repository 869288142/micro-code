import { get } from '../get'
const object = { a: [{ b: { c: 3 } }] }
describe('object/get/hasProp', () => {
  it('有属性', () => {
    expect(get(object, 'a.0.b.c')).toBe(3)
  })
})

describe('object/get/noProp', () => {
  it('无属性', () => {
    expect(get(object, 'a.0.b.d', 4)).toBe(4)
  })
})
