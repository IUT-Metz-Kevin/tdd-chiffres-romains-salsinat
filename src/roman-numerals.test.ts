import { it, expect, test } from "vitest";

class RomanNumeral {
    private translation = {
        'I': 1, 'V': 5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000
    }
    of(value: string): number {
        let res = 0;
        for (let i=0; i<value.length; i++) {
            let signe = 1;
            if (i+1 != value.length) {
                if (this.translation[value[i]] < this.translation[value[i+1]]) signe = -1
            };
            res += (this.translation[value[i]] * signe);
        }; 
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
    ['IX', 9],
    ['X', 10],
    ['MCMXCVIII',1998]
])("%s should return %s",(input, expected) => {
    expect(r.of(input)).toBe(expected);
});

const symbolTable = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
}

function convert(n:number): string {
    const keys = Object.keys(symbolTable).map(Number).reverse();
    let result = '';
    let resultValue = 0;

    for (const key of keys) {
        while (n >= key+resultValue) {
            result += symbolTable[key];
            resultValue += key;
        }
    }
    return result;
}

test.each([
    [1,'I'],
    [2,'II'],
    [3,'III'],
    [5,'V'],
])("%s should return %s",(input, expected) => {
    expect(convert(input)).toBe(expected);
})