import { String, Union } from 'ts-toolbelt';

// Build an object from query params
const query = '/whatever?name=Robert&location=SK';

// make a type
type Query = typeof query;

// name=Robert&location=SK
type SecondQueryPart = String.Split<Query, '?'>[1];

type QueryElements = String.Split<SecondQueryPart, '&'>;

// Key === 'name' , Value === 'Robert'
type Key = String.Split<QueryElements[0], '='>[0];
type Value = String.Split<QueryElements[0], '='>[1];

type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, '='>[0]]: String.Split<QueryElement, '='>[1];
  };
}[QueryElements[number]];

// create an object
const obj: Union.Merge<QueryParams> = {
  name: 'Robert',
  location: 'SK',
};
