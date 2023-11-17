// tests/addition/addition.test.ts

import { add } from '../src/addition';

describe('Addition', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
});
