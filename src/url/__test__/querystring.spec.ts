import { querystring } from '../querystring'

describe('object/get', () => {
  it('QS映射为map', () => {
    expect(querystring('name=whitemu&sex=man&sex=women')).toEqual({
      name: 'whitemu',
      sex: ['women', 'man'],
    })
  })
})
