"use strict";

let animals = [
    {name: "Mette", type: "Cat", age: 31},
    {name: "Chris", type: "Tiger", age: 36},
    {name: "Filippa", type: "Unicorn", age: 7},
    {name: "August", type: "Dragon", age: 3}
];

window.addEventListener("load", () => {
    showAnimals();
    document.querySelector("#create-form").addEventListener("submit", createAnimal)
})

function showAnimals () {
const list = document.querySelector("#list-container tbody");
list.innerHTML = "";

for (const animal of animals) {
    const html = /*html*/ `
    <tr>
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.age}</td>
    </tr>
    `;
    list.insertAdjacentHTML("beforeend", html)
    }
}

function createAnimal(event) {
    event.preventDefault();
    const form = event.target;

    const newAnimal = {
        name: form.name.value,
        type: form.type.value,
        age: form.age.value
    }

    animals.push(newAnimal)
    showAnimals()
}