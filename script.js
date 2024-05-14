const nextButton = document.querySelector("#next");
const backButton = document.querySelector("#back");

const container = document.querySelector(".container");
const list = document.querySelector(".container .list");
const thumb = document.querySelector(".container .thumb");

const changeCityBackground = (type) => {
    const listItems = document.querySelectorAll(".list .li");
    const thumbItems = document.querySelectorAll(".thumb .thumb-item");

    if (type === "next") {
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbItems[0]);
        container.classList.add("next")
    } 
    if (type === "back") {
        list.prepend(listItems[listItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        container.classList.add("back")

    }

    setTimeout(() => {
        container.classList.remove("next")
        container.classList.remove("back")
    }, 3000);
};
