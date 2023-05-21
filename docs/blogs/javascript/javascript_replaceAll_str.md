---
title: "3 Ways To Replace All String Occurrences in JavaScript"
date: "2021-10-18 21:37:29"
tag: [JavaScript]
category: front-end-js
published: true
hideInList: false
feature:
isTop: false
---

There’s no easy way to replace all string occurrences in JavaScript. Java, which had served an inspiration for JavaScript in the first days, has the replaceAll() method on strings since 1995!

In this post, you’ll learn how to replace all string occurrences in JavaScript by splitting and joining a string, and string.replace() combined with a global regular expression.

Moreover, you’ll read about the new proposal string.replaceAll() (at stage 4) that brings the replace all method to JavaScript strings. This is the most convenient approach.

# Splitting and joining an array

If you google how to “replace all string occurrences in JavaScript”, most likely the first approach you’d find is to use an intermediate array.

Here’s how it works:

- Split the string into pieces by the search string:

```javascript
const pieces = string.split(search);
```

- Then join the pieces putting the replace string in between:

```javascript
const resultingString = pieces.join(replace);
```

For example, let’s replace all spaces ' ' with hyphens '-' in 'duck duck go' string:

```javascript
const search = " ";
const replaceWith = "-";
const result = "duck duck go".split(search).join(replaceWith);
result; // => 'duck-duck-go'
```

`'duck duck go'.split(' ')` splits the string into pieces: ['duck', 'duck', 'go'].
Then the pieces `['duck', 'duck', 'go'].join('-')` are joined by inserting '-' in between them, which results in the string `'duck-duck-go'`.

Here’s a generalized helper function that uses splitting and joining approach:

```javascript
function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}
replaceAll("abba", "a", "i"); // => 'ibbi'
replaceAll("go go go!", "go", "move"); // => 'move move move!'
replaceAll("oops", "z", "y"); // => 'oops'
```

This approach requires transforming the string into an array, and then back into a string. Let’s continue looking for better alternatives.

# replace() with a global regular expression

The string method string.replace(regExpSearch, replaceWith) searches and replaces the occurrences of the regular expression regExpSearch with replaceWith string.

To make the method replace() replace all occurrences of the pattern you have to enable the global flag on the regular expression:

- Append g after at the end of regular expression literal: ·`/search/g`
- Or when using a regular expression constructor, add 'g' to the second argument: `new RegExp('search', 'g')`
  Let’s replace all occurrences of ' ' with '-':

```javascript
const searchRegExp = /\s/g;
const replaceWith = "-";
const result = "duck duck go".replace(searchRegExp, replaceWith);
result; // => 'duck-duck-go'
```

The regular expression literal `/\s/g` (note the g global flag) matches the space ' '.

`'duck duck go'.replace(/\s/g, '-')` replaces all matches of `/\s/g` with `'-'`, which results in `'duck-duck-go'`.

You can easily make case insensitive replaces by adding i flag to the regular expression:

```javascript
const searchRegExp = /duck/gi;
const replaceWith = "goose";
const result = "DUCK Duck go".replace(searchRegExp, replaceWith);
result; // => 'goose goose go'
```

The regular expression /duck/gi performs a global case-insensitive search (note i and g flags). `/duck/gi` matches 'DUCK', as well as 'Duck'.

Invoking `'DUCK Duck go'.replace(/duck/gi, 'goose')` replaces all matches of `/duck/gi` substrings with `'goose'`.

## Regular expression from a string

When the regular expression is created from a string, you have to escape the characters `- [ ] / { } ( ) * + ? . \ ^ $ |` because they have special meaning within the regular expression.

Because of that, the special characters are a problem when you’d like to make replace all operation. Here’s an example:

```javascript
const search = "+";
const searchRegExp = new RegExp(search, "g"); // Throws SyntaxError
const replaceWith = "-";
const result = "5+2+1".replace(searchRegExp, replaceWith);
```

The above snippet tries to transform the search string `'+'` into a regular expression. But `'+'` is an invalid regular expression, thus SyntaxError: Invalid regular expression: `/+/`is thrown.

Escaping the character `'\\+'` solves the problem.

Nevertheless, does it worth escaping the search string using a function like escapeRegExp() to be used as a regular expression? Most likely not.

## replace() with a string

If the first argument search of string.replace(search, replaceWith) is a string, then the method replaces only the first occurrence of search:

```javascript
const search = " ";
const replace = "-";
const result = "duck duck go".replace(search, replace);
result; // => 'duck-duck go'
```

`'duck duck go'.replace(' ', '-')` replaces only the first appearance of a space.

# replaceAll() method

Finally, the method string.replaceAll(search, replaceWith) replaces all appearances of search string with replaceWith.

Let’s replace all occurrences of ' ' with '-':

```javascript
const search = " ";
const replaceWith = "-";
const result = "duck duck go".replaceAll(search, replaceWith);
result; // => 'duck-duck-go'
```

`'duck duck go'.replaceAll(' ', '-')` replaces all occurrences of ' ' string with '-'.

string.replaceAll(search, replaceWith) is the best way to replace all string occurrences in a string

Note that currently, the method support in browsers is limited, and you might require a polyfill.

## The difference between replaceAll() and replace()

The string methods replaceAll(search, replaceWith) and replace(search, replaceWith) work the same way, expect 2 things:

If search argument is a string, replaceAll() replaces all occurrences of search with replaceWith, while replace() only the first occurence
If search argument is a non-global regular expression, then replaceAll() throws a TypeError exception.

# Key takeaway

The primitive approach to replace all occurrences is to split the string into chunks by the search string, the join back the string placing the replace string between chunks: `string.split(search).join(replaceWith)`. This approach works, but it’s hacky.

Another approach is to use string.replace(/SEARCH/g, replaceWith) with a regular expression having the global flag enabled.

Unfortunately, you cannot easily generate regular expressions from a string at runtime, because the special characters of regular expressions have to be escaped. And dealing with a regular expression for a simple replacement of strings is overwhelming.

Finally, the new string method string.replaceAll(search, replaceWith) replaces all string occurrences. The method is a proposal at stage 4, and hopefully, it will land in a new JavaScript standard pretty soon.

My recommendation is to use string.replaceAll() to replace strings.
