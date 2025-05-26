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

function convert(n:number): string {
    let romanianNumber = '';
    for (let i=0; i<n; i++) {
        romanianNumber += 'I';
    }
    return romanianNumber;
}

test.each([
    [1,'I'],
    [2,'II'],
    [3,'III'],
])("%s should return %s",(input, expected) => {
    expect(convert(input)).toBe(expected);
})