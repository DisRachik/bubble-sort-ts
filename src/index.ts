import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([54, -3, 13, -5]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('iHor');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(55);
linkedList.add(73);
linkedList.add(8);
linkedList.add(-4);

linkedList.sort();
linkedList.print();
