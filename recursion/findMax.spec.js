import { findMax } from './findMax.js'

describe('findMax', () => {
    it('returns the max value in an array of integers', () => {
        expect(findMax([1,9,-8,2])).toBe(9);
    });
});