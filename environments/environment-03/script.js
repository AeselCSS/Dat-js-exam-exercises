"use strict";

window.addEventListener("load", ()=>{
    showProducts();
    document.querySelector("#create-form").addEventListener("submit", createProduct)
})

const products = [
    {name: "Pepsi Max", price: 50, inStock: true},
    {name: "Pepsi Regular", price: 30, inStock: true},
    {name: "Pepsi Mango", price: 40, inStock: false}
];

function showProducts() {
    const list = document.querySelector("#list-container")
    list.innerHTML= "";

    const filteredProducts = products.filter((product) => product.inStock)

    for (const product of filteredProducts) {
        const html = /*html*/ `
        <article>
            <ul>
                <li>Name: ${product.name}</li>
                <li>Price: ${product.price}</li>
                <li>In stock: ${product.inStock ? "Yes" : "No"}</li>
            </ul>
        </article>
        `;
        list.insertAdjacentHTML("beforeend", html)
    }
}

function createProduct(event) {
    event.preventDefault();
    const form = event.target;

    const newProduct = {
        name: form.name.value,
        price: form.price.value,
        inStock: form.inStock.checked
    }

    products.push(newProduct);
    showProducts();
}

