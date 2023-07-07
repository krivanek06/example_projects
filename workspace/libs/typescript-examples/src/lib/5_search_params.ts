import { String, Union } from 'ts-toolbelt';

// Build an object from query params
const query = '/whatever?name=Robert&location=EN';

// make a type
type Query = typeof query;

// name=Robert&location=SK
type SecondQueryPart = String.Split<Query, '?'>[1];

// ["name=Robert", "location=SK"]
type QueryElements = String.Split<SecondQueryPart, '&'>;

// Key === 'name' , Value === 'Robert'
type Key = String.Split<QueryElements[0], '='>[0];
type Value = String.Split<QueryElements[0], '='>[1];

type QueryParams = {
  [Element in QueryElements[number]]: {
    [Key in String.Split<Element, '='>[0]]: String.Split<Element, '='>[1];
  };
}[QueryElements[number]];

const objIncomplete: QueryParams = {
  name: 'Robert',
};

// create an object
type Merged = Union.Merge<QueryParams>;
const obj: Merged = {
  name: 'Robert',
  location: 'EN',
};
