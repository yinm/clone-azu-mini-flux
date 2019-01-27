import EventEmitter from '../src/EventEmitter'
import Store from '../src/Store'

describe('Store', () => {
  let dispatcher
  let instance
  beforeEach(() => {
    dispatcher = new EventEmitter()
    instance = new Store(dispatcher)
  })

  describe('onCountUp', () => {
    it('should emit `CHANGE` event', (done) => {
      const expectedCount = 42
      instance.on('CHANGE', done)

      dispatcher.emit('countUp', expectedCount)
    })
  })

  describe('getCount', () => {
    it('should return count', () => {
      const expectedCount = 42
      instance.count = expectedCount

      expect(instance.getCount()).toBe(expectedCount)
    })
  })
})
