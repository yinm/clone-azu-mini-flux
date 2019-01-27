import ActionCreator from '../src/ActionCreator'
import EventEmitter from '../src/EventEmitter'

describe('ActionCreator', () => {
  let dispatcher
  let action

  beforeEach(() => {
    dispatcher = new EventEmitter()
    action = new ActionCreator(dispatcher)
  })

  describe('countUp', () => {
    it('should emit `countUp` event', (done) => {
      const expectedCount = 42
      dispatcher.on('countUp', (count) => {
        expect(count).toBe(expectedCount)
        done()
      })

      action.countUp(expectedCount)
    })
  })
})
