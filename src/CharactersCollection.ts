export class CharactersCollection {
  constructor(public data: string) {}
  get length(): number {
    return this.data.length;
  }

  compere(leftInd: number, rightInd: number): boolean {
    return this.data[leftInd].toLowerCase() > this.data[rightInd].toLowerCase();
  }

  change(leftInd: number, rightInd: number): void {
    const charactersArray = this.data.split('');

    const temp = charactersArray[leftInd];
    charactersArray[leftInd] = charactersArray[rightInd];
    charactersArray[rightInd] = temp;

    this.data = charactersArray.join('');
  }
}
