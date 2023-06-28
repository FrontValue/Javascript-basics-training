import ProductList from './product-list.js';
import WishList from './wishlist.js';

const wishList = new WishList('wishList');
const productList = new ProductList('productList');

for (let i = 1; i <= 15; i++) {
    productList.add({
        id: `P${i}`,
        name: `Product ${i}`
    }, (elementData) => {
        wishList.add(elementData);
    });
}
