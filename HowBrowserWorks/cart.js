console.log('cart.js');

const addProduct = () => {
        const productField = document.getElementById('product-name');
        const quantityField = document.getElementById('product-quantity');
        const product = productField.value; 
        const quantity = quantityField.value; 
        productField.value ='';
        quantityField.value ='';

        //console.log(product, quantity)
        displayProduct(product, quantity);
        saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
        const li = document.createElement('li');
        li.innerText = `${product}: ${quantity}`;

        ul.appendChild(li);
} 

//* ষ্টোর করা ডাটা পাওয়ার জন্য
const getStoredShoppingCart = () =>{
        let cart = {};
        const storedCart = localStorage.getItem('cart');
        if(storedCart){
                cart = JSON.parse(storedCart);
        }
        return cart;
}

//* লোকাল ষ্টোরেজে ডাটা সেট করার জন্য
const saveProductToLocalStorage = (product, quantity) => {
        const cart = getStoredShoppingCart();
        cart[product] = quantity;
        const cartStringified = JSON.stringify(cart);
        localStorage.setItem('cart', cartStringified);
}

//* ষ্টোর করা ডাটা দেখানোর জন্য
const displayProductFromLocalStorage =() => {
        const savedCart = getStoredShoppingCart();
        console.log(savedCart);
        for(const product in savedCart ){
                const quantity = savedCart[product];
                console.log(product, quantity);
                displayProduct(product, quantity);
        }
}

displayProductFromLocalStorage()

