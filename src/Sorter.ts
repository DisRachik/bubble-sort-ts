interface Sortable {
  length: number;
  compere(leftInd: number, rightInd: number): boolean;
  change(leftInd: number, rightInd: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

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
