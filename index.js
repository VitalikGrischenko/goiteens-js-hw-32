const btn = document.getElementById("btn");
const title = document.querySelector("h1");
const subtitle = document.querySelector("h2");

function clickBtn() {
    title.style.color = 'red';
    subtitle.style.color = 'blue';
};

btn.addEventListener('click', clickBtn);