import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  constructor(public collection: NumbersCollection) {}

  sort(): void {
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
