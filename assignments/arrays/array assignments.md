# Arrays

Arrays in JavaScript are used to store multiple values in a single variable. 
They can hold values of any type and can dynamically grow or shrink as needed. 
Array elements are accessed using numeric indices starting from 0.

You can use [Codepen](https://codepen.io/pen/?editors=0010) to run the code. At the bottom of the run screen you can click console to open the console and see the logs.

![Codepen run screenshot](<img/Run screen codepen.png>)

Lets start with the following array, you can copy it into the codepen:
```js
const products = [{
    id: 1,
    name: 't-shirt',
    price: 12.99,
    colour: 'blue'
}, {
    id: 2,
    name: 'sweather',
    price: 15.99,
    colour: 'green'
}, {
    id: 3,
    name: 'pants',
    price: 14.50,
    colour: 'yellow'
}, {
    id: 4,
    name: 'socks blue',
    price: 3.99,
    colour: 'blue'
}, {
    id: 5,
    name: 'socks gray',
    price: 3.99,
    colour: 'gray'
}];

// Assignment code

console.log(/* result of the assignment */);
```

## Assignments

You can always reset for the next assignment by copy pasting the above code snippet in the codepen and start clean :)

### Basics

> - print out the length of the array
> - push the following product to the array: `{ id: 6, name: 't-shirt purple', price: 13.99, colour: 'purple' }`
> - concat the following array: `[{ id: 7, name: 'underpants', price: 6.99, colour: 'blue' }]` into the products list
> - get the index of the blue socks in the list
> - with that index slice them out of the array

### Loops

> - loop through the list and `console.log()` all the names and prices of the products
> - return a new array containing only the id's and colours of the items in the array
> - filter out aal blue items in the array
> - use reducer to sum up all prices of the products in the list

### Chaining

> - first concat the following array: `[{ id: 6, name: 't-shirt purple', price: 13.99, colour: 'purple' }, { id: 7, name: 'underpants', price: 6.99, colour: 'black' }]`
> - directly after (chaining) filter the list so it returns all blue items
> - next map the result and return all prices of the products
> - final use reduce to calculate the total price of all blue items
