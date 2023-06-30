# Bonus

Now we've an application which is separated in multiple files and let you add / remove products to your wishlist.
Only things now what is left, is the page refresh... If you refresh you're page the wishlist is gone and that's not something
we want right? Let's start with adding persistence to the wishlist but also to the products list. You can take a look
[here](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for more info about the localstorage api.

Start with implementing the following:
> - Implement the localstorage for the wishlist

Once implemented above functionality let's start testing the application by:
- Verifying all functionalities are still behaving as in assignment 3
- When refreshing the page the exact same state should be shown on the screen

# Bonus 2

The product list is now not editable. But we got the request from our client that they want to add more products to the list.

Start with implementing the following:
> - Add an input field and a button which allows you to add a product to the list
> - Make sure the field is not empty when adding a new product
> - Make sure you don't add 2 products with the same name
> - Make sure every product has a unique id

Once implemented above functionality let's start testing the application by:
- Verifying all functionalities are still behaving as in assignment bonus
- When adding a product you should see it in the products list and you should be able to add it to the wishlist
- You can't add 2 products with the same name
- You can't add a product with an empty name
