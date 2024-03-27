const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;

  beforeEach(() => {
    cal = new Calculator();
  });

  it('init with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('set', () => {
    cal.set(5);
    expect(cal.value).toBe(5);
  });

  it('clear', () => {
    cal.set(6);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(1);
    cal.add(10);
    expect(cal.value).toBe(11);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(102);
    }).toThrow('Value can not be greater than 100');
  });

  it('subtract', () => {
    cal.set(10);
    cal.subtract(3);
    expect(cal.value).toBe(7);
  });

  it('multiply', () => {
    cal.set(2);
    cal.multiply(12);
    expect(cal.value).toBe(24);
  });

  it('multiply should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.set(12);
      cal.multiply(12);
    }).toThrow('Value can not be greater than 100');
  });

  describe('divides', () => {
    it('0 / 0  === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity ', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('144 / 36 === 4', () => {
      cal.set(144);
      cal.divide(36);
      expect(cal.value).toBe(4);
    });
  });
})

