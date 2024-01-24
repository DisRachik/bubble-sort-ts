export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compere(leftInd: number, rightInd: number): boolean {
    return this.data[leftInd] > this.data[rightInd];
  }

  change(leftInd: number, rightInd: number): void {
    const temp = this.data[leftInd];
    this.data[leftInd] = this.data[rightInd];
    this.data[rightInd] = temp;
  }
}
