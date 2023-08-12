"use strict";

window.addEventListener("load", async () => {
    const users = await getUsers();
    console.log(users);
    const filteredUsers = filterUsers(users)
    showUsers(filteredUsers);
});

async function getUsers() {
    const res = await fetch("users.json");
    return res.json();
}

function showUsers(users) {
    const list = document.querySelector("#userlist");
    list.innerHTML = "";
    for (const user of users) {
        const html = /*html*/ `
        <li>Name: ${user.name} - Active: ${user.active ? "Yes" : "No"} - Role:${user.role}</li>
        `;
        list.insertAdjacentHTML("beforeend", html)
    }
}

function filterUsers(users) {
    const filteredUsers = users.filter(user => user.role === "admin");
    console.log(filteredUsers);
    return filteredUsers;
}
