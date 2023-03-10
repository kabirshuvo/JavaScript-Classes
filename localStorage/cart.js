const addProduct = () => {
    const prductField = document.getElementById('product-input-field');
    const quantityField = document.getElementById('quantity-input-field');

    product = prductField.value;
   // console.log(product)
    quantity = quantityField.value;

    prductField.value ='';
    quantityField.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProduct2Local(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('cart-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;

    ul.appendChild(li);
}

const getStoredCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;

}


const saveProduct2Local = (product, quantity) => {
    const cart = getStoredCart();
    cart[product] = quantity;
    const cardStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cardStringified);

}

const displayProductFromLocalStorage = () => {
    const savedCart = getStoredCart();
    console.log(savedCart);

    for(const product in savedCart){
        const quantity = savedCart[product];

        console.log(product, quantity);
        displayProduct(product, quantity);
        
    }
}

displayProductFromLocalStorage();