import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { add, subtract } from '../src/math.js';

describe('math', () => {
  it('add: 2 + 3 = 5', () => assert.equal(add(2, 3), 5));
  it('subtract: 5 - 2 = 3', () => assert.equal(subtract(5, 2), 3));
});
