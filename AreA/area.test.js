
const {area} = require('./area');
test("A one by one rectangle has an area of one", () => {
    expect(area("rectangle",1, 1)).toBe(1);
});


test("A two by two rectangle has an area of four", () => {
    expect(area("rectangle",2, 2)).toBe(4);
});


test("A circle with radius 1 has an area of 1", () => {
    expect(area("ellipse",1, 1)).toBeCloseTo(Math.PI);
});

test("A triangle with base and height of two has an area of 2", () => {
expect(area("triangle",2, 2)).toBe(2);
});