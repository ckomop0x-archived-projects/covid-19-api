import apiPage from '../index';

describe('Main API', () => {
  it('should have a default function', () => {
    expect(typeof apiPage).toBe('function');
  });
  it('should return all global from the API', async () => {
    const setHeader = jest.fn();
    const json = jest.fn();
    const mockFunction = jest.fn();

    const result = await apiPage(
      mockFunction as any,
      {
        setHeader,
        json,
      } as any
    );

    expect(result).toEqual(undefined);
    expect(setHeader).toBeCalledTimes(3);
    expect(json).toBeCalledTimes(1);
  });
});
