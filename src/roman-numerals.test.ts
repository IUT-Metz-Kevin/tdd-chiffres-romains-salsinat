import { it, expect, test } from "vitest";

class RomanNumeral {
    of(value: string): number {
        if(value = "I") return 1;
        return 0;
    }
}

const r = new RomanNumeral

test.each([
    ['I', 1],
    ['II', 2],
])("%s should return %s",(input, expected) => {
    expect(r.of(input)).toBe(expected);
});