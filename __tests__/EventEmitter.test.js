import EventEmitter from '../src/EventEmitter'

describe('EventEmitter', () => {
  let emitter
  beforeEach(() => {
    emitter = new EventEmitter()
  })

  describe('#on', () => {
    it('should set event handler to the key', (done) => {
      const key = 'event-key'
      emitter.on(key, () => {
        done()
      })
      emitter.emit(key)
    })
  })

  describe('#emit', () => {
    it('should pass data to the handlers', (done) => {
      const key = 'event-key'
      const passingData = {"key": "value"}
      emitter.on(key, (data) => {
        expect(data).toBe(passingData)
        done()
      })
      emitter.emit(key, passingData)
    })
  })

  describe('#off', () => {
    it('should unset event handler', (done) => {
      const key = 'event-key'
      const handler = () => {
        done(new Error('should not be called'))
      }
      emitter.on(key, handler)
      emitter.off(key, handler)
      emitter.emit(key)
      emitter.on(key, done)
      emitter.emit(key)
    })
  })
})
