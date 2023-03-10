const addProduct = () => {
    const prductField = document.getElementById('product-input-field');
    const quantityField = document.getElementById('quantity-input-field');

    product = prductField.value;
    quantity = quantityField.value;

    prductField.value ='';
    quantityField.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
}

const displayProduct = () => {
    const ul = document.getElementById('cart-container');
    const li = document.createElement('li')
    li.innerText = `${product}: ${quantity}`

    ul.appendChild('li');
}