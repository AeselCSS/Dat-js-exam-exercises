"use strict";

let users = [];

window.addEventListener("load", async () => {
    users = await getUsers();
    console.log(users);
    showUsers();
});

async function getUsers() {
    const res = await fetch("./users.json");
    return res.json();
}

function showUsers() {
    const list = document.querySelector("#userlist");
    list.innerHTML = "";

    const filteredUsers = users.filter((user) => user.active === true)
    console.log(filteredUsers);

    for (const user of filteredUsers) {
        const html = /*html*/ `
        <li>Name: ${user.name} - Active: ${user.active ? "Yes" : "No"} - Role: ${user.role}</li>
        `;
        list.insertAdjacentHTML("beforeend", html);
    }
}

function createUser(name, active, role) {
    const newUser = {name, active, role}
    users.push(newUser)
    showUsers();
}