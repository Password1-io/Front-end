/*
Project Name: Password1
Website: https://password1.io
Description: Browser-compatible password generation algorithm using Web Crypto API.
Based on the original Node.js implementation.
Version: Gull Lake (Browser Port)

Author: Varand Abrahamian & Matin Solemonpoor
License: MIT License

Copyright (c) 2025 Password1
*/

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

  // Convert ArrayBuffer to hex string
  arrayBufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  // SHA-512 hash using Web Crypto API
  async sha512(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    return this.arrayBufferToHex(hashBuffer);
  }

  async initialHash() {
    let password = this.website ? this.website + this.password + this.salt : this.password + this.salt;
    let generatedPrime = this.convertStrToPrime(password);
    let hashedPassword = await this.sha512(password);
    
    for (let i = 0; i < generatedPrime; i++) {
      hashedPassword = await this.sha512(hashedPassword);
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

  ensureRequirements(input, includeSpecialChars = true) {
    let inputArr = input.split('');
    let requiredTypes = [
      [...'abcdefghijklmnopqrstuvwxyz'],
      [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      [...'0123456789'],
    ];
    
    // Only require special chars if enabled
    if (includeSpecialChars) {
      requiredTypes.push(Object.values(this.specialCharMap));
    }

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

  async generateHash(includeSpecialChars = true, includeCaps = true) {
    let finalGeneratedPassword = await this.initialHash();
    if (includeSpecialChars) {
      finalGeneratedPassword = this.includeSpecialChars(finalGeneratedPassword);
    }
    if (includeCaps) {
      finalGeneratedPassword = this.includeCaps(finalGeneratedPassword);
    }
    finalGeneratedPassword = this.ensureRequirements(finalGeneratedPassword, includeSpecialChars);
    return finalGeneratedPassword;
  }
}

// Normalize domain by stripping common TLDs and subdomains
function normalizeDomain(website) {
  if (!website) return website;
  
  let domain = website.toLowerCase().trim();
  
  // Remove protocol if present
  domain = domain.replace(/^(https?:\/\/)?(www\.)?/, '');
  
  // Remove trailing slashes and paths
  domain = domain.split('/')[0];
  
  // Remove port if present
  domain = domain.split(':')[0];
  
  // Common TLDs to strip
  const tlds = [
    '.com', '.org', '.net', '.edu', '.gov', '.io', '.co', '.app',
    '.dev', '.xyz', '.info', '.biz', '.me', '.tv', '.us', '.uk',
    '.ca', '.au', '.de', '.fr', '.jp', '.cn', '.in', '.br', '.ru',
    '.co.uk', '.com.au', '.co.in', '.com.br', '.co.jp'
  ];
  
  // Sort by length (longest first) to match compound TLDs first
  tlds.sort((a, b) => b.length - a.length);
  
  for (const tld of tlds) {
    if (domain.endsWith(tld)) {
      domain = domain.slice(0, -tld.length);
      break;
    }
  }
  
  return domain;
}

// Helper function for easy usage
export async function generatePassword(masterPassword, website, options = {}) {
  const {
    length = 16,
    includeSpecialChars = true,
    includeCaps = true,
  } = options;
  
  // Normalize the website domain
  const normalizedWebsite = normalizeDomain(website);
  
  const generator = new Password1(masterPassword, length, normalizedWebsite);
  return await generator.generateHash(includeSpecialChars, includeCaps);
}

export default Password1;

