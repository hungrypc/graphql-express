# Notes

## Async Resolve Functions
Resolve can also return a promise. GraphQL automatically detects that we return a promise, waits for the promise to resolve, then sends a response with the data to the user.

## Query Fragments
Let's say our query looks like this:
```graphql
query {
  company (id: "1") {
    id
    name
    description
  }
}
```
What if we want to have multiple queries? Would we do something like this?:
```graphql
query {
  company (id: "1") {
    id
    name
    description
  }
  company (id: "2") {
    id
    name
    description
  }
}
```
No, this wouldn't work. What actually gets returned is just the data from one of them (because of how objects work). What we should do is this:
```graphql
query {
  apple: company (id: "1") {
    id
    name
    description
  }
  google: company (id: "2") {
    id
    name
    description
  }
}
```
But NOW the problem is that we're repeating ourselves with the scalar types. To fix this, we can use query fragments:
```graphql
query {
  apple: company (id: "1") {
    ...companyDetails
  }
  google: company (id: "2") {
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
```