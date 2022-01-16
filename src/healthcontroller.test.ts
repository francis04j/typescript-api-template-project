import healthController from './healthController';
import healthcheck from './healthcheck';

jest.mock('./healthcheck')
const mockHealthCheck = healthcheck as jest.MockedFunction<typeof healthcheck>;


describe('healthController', () => { 
    it('should call health check', async () => {
        const hc = new healthController();
        let message = await hc.getMessage();
        expect(mockHealthCheck).toBeCalled();
    })
})