/* eslint-disable no-global-assign, no-underscore-dangle */
const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });

  test('Returns 1 if birthday was a year ago', () => {
    expect(birthday.howOld(new Date('01 jan 2017'))).toBe(1);
  });
  test('Returns -1 if unborn baby is expected in 1 year', () => {
    expect(birthday.howOld(new Date('01 jan 2019'))).toBe(-1);
  });
  test('Returns 2 if baby is 2 years and then some old', () => {
    expect(birthday.howOld(new Date('26 oct 2015'))).toBe(2);
  });
  test('Returns 0 if birthday is less than one year ago', () => {
    expect(birthday.howOld(new Date('6 jul 2018'))).toBe(0);
  });
});
