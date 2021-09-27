import { sum, mult } from "../calculator";

it(`should return sum of elements`, () => {
    expect(sum(2, 2)).toBe(4);
});

it(`should return result of multiple elements`, () => {
    expect(mult(3, 3)).toBe(9);
});