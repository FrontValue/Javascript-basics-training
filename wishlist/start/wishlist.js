const Wishlist = function (elementId) {
    // This array will contain the items present in the wishlist
    this.items = [];

    // We keep a reference to the element associated to the wishlist
    this.element = document.getElementById(elementId);
};

// TO IMPLEMENT
Wishlist.prototype.contains = function (itemId) {
    // This method should check in the `items` array if there's any item with the specified `itemId`, if yes, it should return true, otherwise it will return false;
    return this.items.filter(function (item) {
        return item.id === itemId;
    }).length > 0;

    // This is the same as above but written with an arrow function
    // return this.items.filter(item => item.id === itemId).length > 0;
};

// TO IMPLEMENT
Wishlist.prototype.add = function (item) {
    // This method should add the item to the `items` array, then call the `render` method. You need to make sure that the item can't be added twice.
    if (!this.contains(item.id)) {
        this.items.push(item);
        this.render();
    }
};

// TO IMPLEMENT
Wishlist.prototype.remove = function (itemId) {
    // This method should remove the item specified by `itemId` from the `items` array. Then, you need to call the render method
    const index = this.items.findIndex(function (item) {
        return item.id === itemId;
    });

    // This is the same as above but written with an arrow function
    // const index = this.items.findIndex(item => item.id === itemId);

    if (index >= 0) {
        this.items.splice(index, 1);
        this.render();
    }
};

Wishlist.prototype.render = function () {
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
};

Wishlist.prototype.clear = function () {
    this.element
        .querySelectorAll('li')
        .forEach((li) => {
            this.element.removeChild(li);
        });
};

const wishlist = new Wishlist('wishlist');

document
    .querySelectorAll('.add-to-wishlist')
    .forEach((e) => {
        e.addEventListener('click', (ev) => {
            const element = ev.target;
            wishlist.add({
                id: element.dataset.id,
                name: element.dataset.name
            });
        });
    });
