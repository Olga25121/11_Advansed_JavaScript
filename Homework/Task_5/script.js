import { products } from "./data.js";
const content = document.querySelector('.content');

products.forEach(({ imgProduct, nameProduct, descriptionProduct, priceProduct }) => {
    const divProduct = document.createElement('div');
    divProduct.classList.add('product');
    content.appendChild(divProduct);

    const img = document.createElement('img');
    img.classList.add('product__img');
    img.src = imgProduct;
    img.width = 200;
    divProduct.appendChild(img);
 
    const divProductWrap = document.createElement('div');
    divProductWrap.classList.add('product__wrap');
    divProduct.appendChild(divProductWrap);
 
    const productName = document.createElement('h2');
    productName.textContent = nameProduct;
    divProductWrap.appendChild(productName);
 
    const productDescription = document.createElement('p');
    productDescription.textContent = descriptionProduct;
    divProductWrap.appendChild(productDescription);
 
    const productPrice = document.createElement('p');
    productPrice.textContent = priceProduct;
    divProductWrap.appendChild(productPrice);
});

// // Функция для добавления продуктов в список
// function addProductsToList(products) {
// const productList = document.getElementById('product-list');
// products.forEach(product => {
//         // Создаем элементы для каждого продукта
// const listItem = document.createElement('li');
// listItem.className = 'product-item'; // Можно добавить свои стили
// const img = document.createElement('img');
// img.src = product.image;
// img.alt = product.title;
// img.width = 150;
// img.height = 150;
// const title = document.createElement('h2');
// title.textContent = product.title;
// const description = document.createElement('p');
// description.textContent = product.description;
// const price = document.createElement('p');
// price.textContent = `Price: $${product.price.toFixed(2)
//         }`;
// const button = document.createElement('button');
// button.className = 'add-to-cart';
// button.setAttribute('data-id', product.id);
// button.textContent = 'Add to Cart';
// // Добавляем все элементы в родительский элемент
// listItem.append(img, title, description, price, button);
// // Добавляем элемент списка в ul
// productList.append(listItem);
//     });
// }
// // После загрузки DOM вызываем функцию для добавления продуктов
// document.addEventListener('DOMContentLoaded', () => {
// addProductsToList(data);
// });