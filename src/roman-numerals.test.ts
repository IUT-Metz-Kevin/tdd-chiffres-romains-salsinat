import { it, expect, test } from "vitest";

class RomanNumeral {
    of(value: string): number {
        return 0;
    }
}

const r = new RomanNumeral

test.each([
    ['I', 1],
])("%s should return %s",(input, expected) => {
    expect(r.of(input[0])).toBe(input[1]);
});