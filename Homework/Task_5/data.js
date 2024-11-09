
// Пример данных в формате JSON
const dataJSON = '[{"id":1,"title":"Футболка","description":"Очень красивая и удобная футболка в различных цветах","price":10.99,"image":"img/t-shirt.jpg"}, {"id":2,"title":"Джинсы","description":"Повседневные джинсы в различных размерах и цветах","price":12.99,"image":"img/jeans.jpg"},{"id":3, "title":"Кроссовки","description":"Удобные кроссовки для спорта и повседневной носки","price":15.99,"image":"img/sneakers.jpg"}, {"id":3, "title":"Платье","description":"Элегантное платье с разнообразными деталями","price":24.99,"image":"img/dress.jpg"}]';
// Преобразование строки JSON в объект JavaScript
const data = JSON.parse(dataJSON);
