export default class WishList {
    STORAGE_KEY = 'wishlist';

    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.items = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        this.render();
    }

    contains(itemId) {
        // This method should check in the `items` array if there's any item with the specified `itemId`, if yes, it should return true, otherwise it will return false;
        return this.items.filter(item => item.id === itemId).length > 0;
    }

    add(item) {
        // This method should add the item to the `items` array, then call the `render` method. You need to make sure that the item can't be added twice.
        if (!this.contains(item.id)) {
            this.items.push(item);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
            this.render();
        }
    }

    remove(itemId) {
        // This method should remove the item specified by `itemId` from the `items` array. Then, you need to call the render method
        const index = this.items.findIndex(item => item.id === itemId);

        if (index >= 0) {
            this.items.splice(index, 1);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
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
