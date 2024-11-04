/**
 * @author codekantine
 * @version 1.0.0
 */
class PasswordGenerator {
  constructor() {
    this.consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
    this.vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    this.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.symbols = ['-'];
    this.result = [[], [], []];
  }

  get password() {
    let pw = new Array();
    this.result.forEach(el => pw.push(el.join('')));
    return pw.join(this.symbols[PasswordGenerator.getRandom(this.symbols.length - 1)]);
  }

  /**
   * @param {string} ch character
   * @param {Array} src source array
   * @returns number of occurrences
   */
  static countChars(ch = '', src = []) {
    let count = 0;
    src.forEach(el => {
      if (el.toLowerCase() === ch) {
        ++count;
      }
    });
    return count;
  }

  /**
   * @param {number} max max value
   * @returns number between 0 and max
   */
  static getRandom(max = -1) {
    if (max >= 0) {
      return Math.floor(Math.random() * (max + 1));
    }
    return -1;
  }

  /**
   * @returns password as string
   */
  generatePassword() {
    this.result = [[], [], []];
    let sectionDigit = PasswordGenerator.getRandom(2);
    let positionDigit = sectionDigit && PasswordGenerator.getRandom(1) ? 0 : 5;
    let sectionUpper = PasswordGenerator.getRandom(2);
    let positionUpper = -1;
    do {
      positionUpper = PasswordGenerator.getRandom(5);
    } while (sectionDigit === sectionUpper && positionDigit === positionUpper);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 6; j++) {
        let next = '';
        do {
          if (j === 1 || j === 4) {
            next = this.vowels[PasswordGenerator.getRandom(this.vowels.length - 1)];
          } else {
            next = this.consonants[PasswordGenerator.getRandom(this.consonants.length - 1)];
          }
        } while (PasswordGenerator.countChars(next, this.result[i]) >= 2);
        this.result[i].push(next);
      }
    }
    this.result[sectionDigit].splice(positionDigit, 0, this.digits[PasswordGenerator.getRandom(this.digits.length - 1)]);
    this.result[sectionDigit].pop();
    this.result[sectionUpper][positionUpper] = this.result[sectionUpper][positionUpper].toUpperCase();
    return this.password;
  }
}