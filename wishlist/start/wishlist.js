class WishList {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.items = [];
    }

    contains(itemId) {
        // This method should check in the `items` array if there's any item with the specified `itemId`, if yes, it should return true, otherwise it will return false;
        return this.items.filter(item => item.id === itemId).length > 0;
    }

    add(item) {
        // This method should add the item to the `items` array, then call the `render` method. You need to make sure that the item can't be added twice.
        if (!this.contains(item.id)) {
            this.items.push(item);
            this.render();
        }
    }

    remove(itemId) {
        // This method should remove the item specified by `itemId` from the `items` array. Then, you need to call the render method
        const index = this.items.findIndex(item => item.id === itemId);

        if (index >= 0) {
            this.items.splice(index, 1);
            this.render();
        }
    }

    render() {
        this.clear();

        this.items.forEach((i) => {
            const li = document.createElement('li');
            const remove = document.createElement('button');
            remove.innerHTML = 'Remove from wishlist';
            remove.addEventListener('click', () => {
                this.remove(i.id);
            });
            li.innerHTML = i.name;
            li.appendChild(remove);

            this.element.appendChild(li);
        });
    }

    clear() {
        this.element
            .querySelectorAll('li')
            .forEach((li) => {
                this.element.removeChild(li);
            });
    }
}

class ProductList {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.products = [];
    }

    contains(productId) {
        // This method should check in the `items` array if there's any item with the specified `itemId`, if yes, it should return true, otherwise it will return false;
        return this.products.filter(product => product.id === productId).length > 0;
    }

    add(product) {
        // This method should add the item to the `items` array, then call the `render` method. You need to make sure that the item can't be added twice.
        if (!this.contains(product.id)) {
            this.products.push(product);
            this.render();
        }
    }

    remove(productId) {
        // This method should remove the item specified by `itemId` from the `items` array. Then, you need to call the render method
        const index = this.products.findIndex(product => product.id === productId);

        if (index >= 0) {
            this.products.splice(index, 1);
            this.render();
        }
    }

    render() {
        this.clear();

        this.products.forEach(p => {
            const li = document.createElement('li');
            const add = document.createElement('button');
            add.innerHTML = 'Add to wishlist';
            add.dataset.id = p.id;
            add.dataset.name = p.name;
            add.addEventListener('click', (event) => {
                const element = event.target;
                wishList.add({
                    id: element.dataset.id,
                    name: element.dataset.name
                });
            });
            li.innerHTML = p.name;
            li.appendChild(add);

            this.element.appendChild(li);
        });
    }

    clear() {
        this.element
            .querySelectorAll('li')
            .forEach((li) => {
                this.element.removeChild(li);
            });
    }

}

const wishList = new WishList('wishList');
const productList = new ProductList('productList');

for (let i = 1; i <= 15; i++) {
    productList.add({
        id: `P${i}`,
        name: `Product ${i}`
    });
}
