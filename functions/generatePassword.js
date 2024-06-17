/*
Project Name: Password1
Website: https://password1.io
Description: The following JavaScript code is the open source algorithm behind Password1's password generation.
It uses an unnecessary and unreasonably secure method of generating a password from an initial seed password.
Version: June Lake

Author: Varand Abrahamian & Matin Solemonpoor
License: MIT License

Copyright (c) 2024 Password1

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const crypto = require('crypto');

class Password1 {
    constructor(password, generatedPasswordLength = 12, website = null, salt = "p1-june-ot1x&tx@ck4hr2b#+-g%zki&0@9-a87_eqrie3)mql=#@_asrr") {
        this.password = password;
        this.generatedPasswordLength = generatedPasswordLength;
        this.website = website;
        this.salt = salt;
        this.primes = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
        ];
        this.specialCharMap = {
            0: "!",
            1: "_",
            2: "?",
            3: "#",
            4: "$",
            5: "%",
            6: "^",
            7: "&",
            8: "+",
            9: "=",
            10: ":"
        };
    }

    convertStrToPrime(input) {
        let outputInt = 0;
        for (let char of input) {
            outputInt += char.charCodeAt(0);
        }
        let primeNumber = this.primes[outputInt % this.primes.length];
        return primeNumber;
    }

    initialHash() {
        let password = this.website ? this.website + this.password + this.salt : this.password + this.salt;
        let generatedPrime = this.convertStrToPrime(password);
        let hashedPassword = crypto.createHash('sha512').update(password).digest('hex');
        for (let i = 0; i < generatedPrime; i++) {
            hashedPassword = crypto.createHash('sha512').update(hashedPassword).digest('hex');
        }
        return hashedPassword.slice(0, this.generatedPasswordLength);
    }

    splitStringIntoNArrays(inputString, length) {
        if (length <= 0) {
            throw new Error("The number of arrays must be greater than 0");
        }
        let avgLength = Math.floor(inputString.length / length);
        let remainder = inputString.length % length;

        let result = [];
        let start = 0;

        for (let i = 0; i < length; i++) {
            let end = start + avgLength + (i < remainder ? 1 : 0);
            result.push(inputString.slice(start, end));
            start = end;
        }
        return result;
    }

    calculateSpecialChars(input) {
        let subarrays = this.splitStringIntoNArrays(input, 3);
        let primes = subarrays.map(arr => this.convertStrToPrime(arr));
        let specialCharsAndPositions = primes.map(prime => [(prime % 3), (prime % 11)]);
        return specialCharsAndPositions;
    }

    includeSpecialChars(input) {
        let calculatedSpecialCharsAndPos = this.calculateSpecialChars(input);
        let inputArr = input.split('');
        let positionPadding = 0;
        let idx = 0;

        while (idx < calculatedSpecialCharsAndPos.length && positionPadding < inputArr.length) {
            let [position, specialCharKey] = calculatedSpecialCharsAndPos[idx];
            inputArr[position + positionPadding] = this.specialCharMap[specialCharKey];
            positionPadding += position;
            idx++;
        }
        return inputArr.join('');
    }

    includeCaps(input) {
        let inputArr = input.split('');
        let positions = inputArr.map((char, i) => char.match(/[a-zA-Z]/) ? i : null).filter(i => i !== null);

        if (!positions.length) {
            return input;
        }
        inputArr[positions[0]] = inputArr[positions[0]].toUpperCase();
        return inputArr.join('');
    }

    ensureRequirements(input) {
        let inputArr = input.split('');
        let requiredTypes = [
            [...'abcdefghijklmnopqrstuvwxyz'],
            [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
            [...'0123456789'],
            Object.values(this.specialCharMap)
        ];

        for (let i = 0; i < requiredTypes.length; i++) {
            if (!inputArr.some(char => requiredTypes[i].includes(char))) {
                let position = (i * 3) % this.generatedPasswordLength;
                inputArr[position] = requiredTypes[i][position % requiredTypes[i].length];
            }
        }

        let charCounts = {};
        for (let i = 0; i < inputArr.length; i++) {
            let char = inputArr[i];
            if (charCounts[char]) {
                charCounts[char]++;
                if (charCounts[char] > 2) {
                    for (let reqType of requiredTypes) {
                        for (let replacementChar of reqType) {
                            if (!charCounts[replacementChar]) {
                                inputArr[i] = replacementChar;
                                charCounts[replacementChar] = 1;
                                break;
                            }
                        }
                    }
                }
            } else {
                charCounts[char] = 1;
            }
        }
        return inputArr.join('');
    }

    generateHash(includeSpecialChars = true, includeCaps = true) {
        let finalGeneratedPassword = this.initialHash();
        if (includeSpecialChars) {
            finalGeneratedPassword = this.includeSpecialChars(finalGeneratedPassword);
        }
        if (includeCaps) {
            finalGeneratedPassword = this.includeCaps(finalGeneratedPassword);
        }
        finalGeneratedPassword = this.ensureRequirements(finalGeneratedPassword);
        return finalGeneratedPassword;
    }
}

module.exports = Password1;