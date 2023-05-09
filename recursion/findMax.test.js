const findMax = require('./findMax')

test('finds max number in an array', () => {
    expect(findMax([1,5,7,2,-5])).toBe(7);
})