import healthcheck from "./healthcheck"

describe('healthcheck', () => {
    it('should return a message', () => {
        const res = healthcheck()
        expect(res).toBe('Health check passed!')
    })
})