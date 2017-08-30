import {List, Map, Record} from 'immutable'

const Person = Record({
    name: 'Test' as string
  });
  
  let person = new Person();
  console.log(person.name)