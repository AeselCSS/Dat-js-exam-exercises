"use strict";

let animals = [];

window.addEventListener("load", () => {
    console.log("Hello World");
    document.querySelector("#create-form").addEventListener("submit", createAnimal);
});

function newAnimal(name, type, age) {
    const newAnimal = { name, type, age };
    animals.push(newAnimal);
    console.log(animals);
    showAnimals();
}

function createAnimal(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const type = form.type.value;
    const age = form.age.value;

    newAnimal(name, type, age);
}

function showAnimals() {
    const list = document.querySelector("#list-container tbody");
    list.innerHTML = "";

    animals.sort((a, b) => a.name.localeCompare(b.name));

    for (const animal of animals) {
        const html = /*html*/ `
        <tr>
            <td>${animal.name}</td>
            <td>${animal.type}</td>
            <td>${animal.age}</td>
        </tr>
        `;
        list.insertAdjacentHTML("beforeend", html);
    }
}
