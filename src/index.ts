import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([54, -3, 13, -5]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('iHor');
const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();
console.log(charactersCollection.data);
