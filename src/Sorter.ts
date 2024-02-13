export abstract class Sorter {
  abstract compere(leftInd: number, rightInd: number): boolean;
  abstract change(leftInd: number, rightInd: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i += 1) {
      for (let j = 0; j < length - i - 1; j += 1) {
        if (this.compere(j, j + 1)) {
          this.change(j, j + 1);
        }
      }
    }
  }
}
