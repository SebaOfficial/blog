---
title: TypeScript is NOT a Programming Language
description: Why TypeScript can't be considered a real programming language
summary: 🚫 TypeScript is not a real programming language
published: '2024-05-18T17:31:43.000+02:00'
updated: '2024-05-18T17:31:43.000+02:00'
cover: ./cover.jpg
coverStyle: 'IN'
tags:
  - [ TypeScript, Duck Typing, Nominal Typing ]
---

## Enhancing JavaScript with Static Typing
TypeScript stands as a superset of JavaScript, encompassing all its features while extending its capabilities with additional functionalities.
It empowers developers with the ability to specify types, adding a layer of static typing to JavaScript projects.

However, it's essential to note that TypeScript doesn't directly execute in production environments.
Instead, it undergoes transpilation into JavaScript before execution.
This transformation process ensures compatibility with all JavaScript environments, as browsers and most platforms don't inherently support TypeScript.

:::info Disclaimer ❕
This post aims to provoke critical thinking and discussion rather than assert absolute truths.
The intention here is to challenge conventional perspectives and encourage deeper exploration of the language.
:::

Before delving into the matter, it's crucial to clarify what we mean by "programming language":
> A programming language is a system of notation for writing computer programs. Programming languages are described in terms of their syntax (form) and semantics (meaning), usually defined by a formal language. 

## Duck Typing and Structural Typing
In TypeScript, types aren't confined to unique labels; they primarily describe the shape of objects.
This approach, known as [duck typing](https://en.wikipedia.org/wiki/Duck_typing), determines an object's type based on its structure.
As the adage goes:
> If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.

### Example
```ts
type User = {
  name: string;
  age: number;
  email: string;
};

function getUser(user: { age: number; email: string}) {
  return user;
}

const exampleUser: User = {
  name: 'Jhon Doe',
  age: 40,
  email: 'jhon.doe@example.com',
};

// Although not ideal, TypeScript doesn't raise an error
// because exampleUser satisfies the structure expected by getUser
getUser(exampleUser);
```


## Nominal Typing with Symbols
To implement nominal typing in TypeScript, developers can leverage [symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
Symbols serve as unique identifiers, allowing for the distinction between different types by associating them with specific symbols.

By "tagging" types with symbols, developers can enforce nominal typing, ensuring that types with identical structures remain distinct entities.
This approach becomes particularly useful when there's a need to differentiate between similar types with the same structure.

Consider the scenario where we have two types, `CustomerProfile` and `AdminProfile`, sharing identical structures but serving different purposes.
Through nominal typing with symbols, TypeScript prevents unintended assignments between these types, maintaining type safety and clarity within the codebase.

### Example
```ts
// Define symbols for nominal typing
const CustomerProfileSymbol = Symbol('CustomerProfile');
const AdminProfileSymbol = Symbol('AdminProfile');

// Define types using symbols
type CustomerProfile = {
  type: typeof CustomerProfileSymbol;
  name: string;
  email: string;
};

type AdminProfile = {
  type: typeof AdminProfileSymbol;
  name: string;
  email: string;
};

// Function to check if a profile is an admin profile
function isAdminProfile(profile: CustomerProfile | AdminProfile): profile is AdminProfile {
  return profile.type === AdminProfileSymbol;
}

// Example usage
const customer: CustomerProfile = {
  type: CustomerProfileSymbol,
  name: 'Alice',
  email: 'alice@example.com',
};

const admin: AdminProfile = {
  type: AdminProfileSymbol,
  name: 'Bob',
  email: 'bob@example.com',
};

// TypeScript will catch this assignment as an error
// because of the nominal typing with symbols
// const invalidAssignment: AdminProfile = customer;

// Check if a profile is an admin profile
if (isAdminProfile(admin)) {
  console.log(`${admin.name} is an admin.`);
} else {
  console.log(`${admin.name} is a customer.`);
}
```
