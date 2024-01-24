"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i += 1) {
            for (let j = 0; j < length - i - 1; j += 1) {
                if (this.collection.compere(j, j + 1)) {
                    this.collection.change(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
