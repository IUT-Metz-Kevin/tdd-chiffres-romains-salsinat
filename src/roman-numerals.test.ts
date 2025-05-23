import { it, expect, test } from "vitest";

class RomanNumeral {
    private translation = {
        'I': 1, 'V': 5, 'X':10
    }
    of(value: string): number {
        let res = 0
        for (let char of value) res += this.translation[char]
        return res;
    }
}

const r = new RomanNumeral

test.each([
    ['I', 1],
    ['II', 2],
    ['III', 3],
    ['IV', 4],
    ['V', 5],
    ['VI', 6],
    ['VII', 7],
    ['VIII', 8],
    ['X', 10],
])("%s should return %s",(input, expected) => {
    expect(r.of(input)).toBe(expected);
});