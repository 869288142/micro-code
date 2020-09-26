import { shuffle } from '../shuffle'

describe('array/shuffle', () => {
  const orign = ['1', '2', 1]
  const copyOrign = [...orign]
  const shuffleOrign = shuffle<typeof orign>(orign)
  it('array shuffle', () => {
    expect(shuffleOrign.join(',')).not.toBe(copyOrign.join(','))
  })
})
