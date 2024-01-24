"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compere(leftInd, rightInd) {
        return this.data[leftInd] > this.data[rightInd];
    }
    change(leftInd, rightInd) {
        const temp = this.data[leftInd];
        this.data[leftInd] = this.data[rightInd];
        this.data[rightInd] = temp;
    }
}
exports.NumbersCollection = NumbersCollection;
