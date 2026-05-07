# TypeScript Concepts Summary (Based on Your Code)

## Overview

This document explains the concepts demonstrated in your TypeScript code without repeating the actual implementations.

---

## 1. Array Filtering Logic

You are working with logic that processes arrays by selecting elements based on conditions.

* Core idea: iterate through a list and keep only values that satisfy a rule
* This represents functional programming style
* Common use case: data filtering in real applications (lists, search results, validation)

---

## 2. String Manipulation Concept

Your logic transforms text by breaking it into smaller parts and reordering them.

* Core idea: strings can be treated like arrays of characters
* Transformation happens using split → transform → join pattern
* Useful for formatting, encoding, and UI transformations

---

## 3. Type Narrowing with Union Types

You handle values that can be more than one type (string or number).

* Core idea: a variable may hold multiple possible types
* TypeScript requires checking the actual type before using it
* This process is called type narrowing

Why it matters:

* Prevents runtime errors
* Ensures safe operations based on actual type

---

## 4. Generics with Key Constraints

You use a pattern where functions work with any object structure but still remain type-safe.

* Core idea: reusable logic that adapts to different object shapes
* `keyof` ensures only valid property keys are allowed
* Prevents accessing invalid or undefined properties

Why it matters:

* Eliminates duplication of similar functions
* Maintains strict type safety across dynamic objects

---

## 5. Object Extension (Intersection Concept)

You extend existing data structures by adding new properties dynamically.

* Core idea: combine existing object type with additional fields
* Avoids modifying original structure
* Helps create derived models from base data

Use case:

* Adding computed or runtime properties without changing original type definition

---

## 6. Object-Oriented Programming Structure

You model real-world entities using classes and relationships.

### Inheritance

* One class reuses properties and behavior of another
* Reduces duplication
* Builds hierarchical structure

### Encapsulation

* Data is bundled inside a class
* Internal state is controlled and protected
* Prevents direct uncontrolled modification

### Method Behavior

* Classes define behavior related to their data
* Each object can represent a real-world entity with state + actions

---

## 7. Array Comparison Logic

You implement logic that finds common elements between two datasets.

* Core idea: compare two collections and extract shared values
* Uses inclusion checking inside iteration
* Common in search, matching, and recommendation systems

---

## Key Learning Areas

* Functional programming patterns (array operations)
* Type safety using TypeScript features
* Type narrowing for safe runtime checks
* Generic programming for reusable logic
* Object-oriented design principles for structuring code
