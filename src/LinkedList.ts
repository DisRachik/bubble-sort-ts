class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let lengthCounter = 1;
    let node = this.head;
    while (node.next) {
      lengthCounter += 1;
      node = node.next;
    }
    return lengthCounter;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('The index isn`t exist');
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter += 1;
      node = node.next as Node;
    }

    throw new Error('The index isn`t exist');
  }

  compere(leftInd: number, rightInd: number): boolean {
    if (!this.head) {
      throw new Error('This LinkedList is empty now');
    }
    return this.at(leftInd).data > this.at(rightInd).data;
  }

  change(leftInd: number, rightInd: number): void {
    const leftNode = this.at(leftInd);
    const rightNode = this.at(rightInd);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next as Node;
    }
  }
}
