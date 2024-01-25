"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compere(leftInd, rightInd) {
        return this.data[leftInd].toLowerCase() > this.data[rightInd].toLowerCase();
    }
    change(leftInd, rightInd) {
        const charactersArray = this.data.split('');
        const temp = charactersArray[leftInd];
        charactersArray[leftInd] = charactersArray[rightInd];
        charactersArray[rightInd] = temp;
        this.data = charactersArray.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
