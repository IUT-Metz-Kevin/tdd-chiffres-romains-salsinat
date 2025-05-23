import { it, expect, test } from "vitest";

class RomanNumeral {
    of(value: string): number {
        const countI = value.split("").filter((char) => char === 'I').length;
        const countV = value.split("").filter((char) => char === 'V').length;
        return countI + countV * 5;
    }
}

const r = new RomanNumeral

test.each([
    ['I', 1],
    ['II', 2],
    ['III', 3],
    ['V', 5],
])("%s should return %s",(input, expected) => {
    expect(r.of(input)).toBe(expected);
});