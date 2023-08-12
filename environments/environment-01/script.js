"use strict";

window.addEventListener("load", async () => {
    const users = await getUsers();
    showUsers(users);
    countRoles(users);
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
        <li>Name: ${user.name} - Role: ${user.role}</li>
        `;
        list.insertAdjacentHTML("beforeend", html);
    }
}

function countRoles(users) {
    const adminCount = users.filter((user) => user.role === "admin");
    const userCount = users.filter((user) => user.role === "user");
    const guestCount = users.filter((user) => user.role === "guest");

    document.querySelector("#admin-count").textContent = adminCount.length;
    document.querySelector("#user-count").textContent = userCount.length;
    document.querySelector("#guest-count").textContent = guestCount.length;
}
