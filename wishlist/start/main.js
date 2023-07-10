import ProductList from './product-list.js';
import WishList from './wishlist.js';

const wishList = new WishList('wishList');
const productList = new ProductList('productList');

for (let i = 1; i <= 15; i++) {
    addProductWithCallback(i, `Product ${i}`);
}

function addProductWithCallback(id, name) {
    productList.add({
        id: `P${id}`,
        name: `${name}`
    }, (elementData) => {
        wishList.add(elementData);
    });
}


const form = document.getElementById('newProductForm');
const productInput = document.getElementById('product');

form.addEventListener('submit', event => {
    event.preventDefault();
    if (validateForm()) {
        // Form submission successful
        const newId = productList.products.length + 1;
        addProductWithCallback(newId, productInput.value);
        form.reset();
    }
});

function validateForm() {
    let isValid = true;

    if (!validateProduct()) {
        isValid = false;
    }

    return isValid;
}

function validateProduct() {
    const productValue = productInput.value.trim();
    const existingInList = productList.containsWithName(productValue);

    if (productValue.length < 1 || existingInList) {
        displayError(productInput, 'Product already exists in the current list');
        return false;
    }

    clearError(productInput);
    return true;
}

function displayError(inputElement, errorMessage) {
    const errorElement = document.createElement('span');
    errorElement.className = 'error';
    errorElement.innerText = errorMessage;

    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
}

function clearError(inputElement) {
    if (inputElement.nextSibling && inputElement.nextSibling.className === 'error') {
        inputElement.parentNode.removeChild(inputElement.nextSibling);
    }
}
