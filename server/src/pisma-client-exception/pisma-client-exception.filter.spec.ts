import { PismaClientExceptionFilter } from './pisma-client-exception.filter';

describe('PismaClientExceptionFilter', () => {
  it('should be defined', () => {
    expect(new PismaClientExceptionFilter()).toBeDefined();
  });
});
