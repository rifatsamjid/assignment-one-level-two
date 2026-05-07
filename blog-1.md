## Type Safety in TypeScript: `any` vs `unknown`, and How `Pick` & `Omit` Keep Code DRY

### Introduction

TypeScript is designed to catch errors before runtime by enforcing strict type safety. However, developers sometimes bypass this system using `any`, or they struggle with handling reusable types in large applications.

In this blog, we will cover two important concepts:

1. Why `any` is considered a type safety hole and why `unknown` is safer (with type narrowing)
2. How `Pick` and `Omit` utility types help prevent code duplication and follow the DRY principle

---

## 1. Why `any` is a Type Safety Hole

### What is `any`?

The `any` type disables TypeScript’s type checking. Once a value is marked as `any`, you can do anything with it.

```ts
let data: any = "Hello";

data.toUpperCase(); 
data.push(10); 
```

### Why `any` is dangerous

*  Removes type safety
*  Hides runtime errors
*  Breaks TypeScript’s purpose

That’s why `any` is called a **type safety hole** — it allows unsafe operations without warnings.

---

## Why `unknown` is Safer

`unknown` is a safer alternative to `any`. It also accepts any value, but **prevents direct usage until type checking is done**.

```ts
let data: unknown = "Hello";

// data.toUpperCase();  Error: Object is of type 'unknown'
```

---

## Type Narrowing Concept

To use an `unknown` value, we must narrow its type first.

### Example:

```ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase()); 
}
```

### How type narrowing works:

TypeScript uses checks like:

* `typeof`
* `instanceof`
* custom type guards

This ensures we only perform valid operations on a confirmed type.

---

## Comparison: `any` vs `unknown`

| Feature             | any       | unknown       |
| ------------------- | --------- | ------------- |
| Type safety         |  None    |  Strong      |
| Usage without check |  Allowed |  Not allowed |
| Recommended         |  No      |  Yes         |

---

## 2. How Pick and Omit Keep Code DRY

In large TypeScript apps, we often reuse the same base interface but need different versions of it.

This can lead to duplication if not handled properly.

---

## Master Interface Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
```

---

## Problem Without Utility Types

We might create duplicate interfaces like:

```ts
interface LoginUser {
  email: string;
  password: string;
}

interface PublicUser {
  id: number;
  name: string;
  email: string;
  role: string;
}
```

This breaks the **DRY (Don’t Repeat Yourself)** principle.

---

## Using Pick

`Pick` selects only required fields from a type.

```ts
type LoginUser = Pick<User, "email" | "password">;

const userLogin: LoginUser = {
  email: "test@gmail.com",
  password: "123456",
};
```

---

## Using Omit

`Omit` removes unwanted fields from a type.

```ts
type PublicUser = Omit<User, "password">;

const userProfile: PublicUser = {
  id: 1,
  name: "Rifat",
  email: "rifat@gmail.com",
  role: "admin",
};
```

---

## How This Keeps Code DRY

Instead of rewriting types:

* We reuse the master interface (`User`)
* We create slices using `Pick` and `Omit`
* We avoid duplication and inconsistencies

 Easier maintenance
 Cleaner architecture
 Less chance of bugs

---

## Conclusion

* `any` breaks type safety and should be avoided
* `unknown` is safer because it forces type checking through narrowing
* `Pick` and `Omit` help reuse existing interfaces and follow the DRY principle

Together, these features make TypeScript code **safer, cleaner, and more maintainable** in real-world applications.
