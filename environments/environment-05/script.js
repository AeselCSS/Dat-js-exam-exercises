"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", () => {
    showCourses();
    console.log(courses);
    createCourse("Test", "2023-09-01", "2024-01-31", 10, 50, "Peter Lind");
    createCourse("Test2", "2023-09-01", "2024-01-31", 10, 50, "Peter Lind");
    createCourse("Test3", "2023-09-01", "2024-01-31", 10, 50, "Peter Lind");
});

function showCourses() {
    const list = document.querySelector("#courses-list");
    list.innerHTML = "";

    for (const course of courses) {
        const html = /*html*/ `
        <li>Name: ${course.name} - ECTS: ${course.ectsPoints} - Teacher: ${course.teacher}</li>
        `;
        list.insertAdjacentHTML("beforeend", html);
    }
}

function createCourse(name, startDate, endDate, ectsPoints, maxStudents, teacher) {
    const newCourse = { name, startDate, endDate, ectsPoints, maxStudents, teacher };
    courses.push(newCourse);
    showCourses();
}
