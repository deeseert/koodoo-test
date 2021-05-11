const accountTypeChecker = require('./index');
const mockTypeA = require('./mocks/mockTypeA');
const mockTypeB = require('./mocks/mockTypeB');

describe('accountTypeChecker', () => {

  it('Should return \'A\' if the balance decreases by varying amounts', () => {
    expect(accountTypeChecker(mockTypeA)).toBe('A');
  });

  it('Should return \'B\' if the balance decreases by fixed amounts', () => {
    expect(accountTypeChecker(mockTypeB)).toBe('B');
  });

  it('should throw error when there are no entries', () => {
    expect(() => accountTypeChecker([])).toThrow();
  });

});
