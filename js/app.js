// Tab Control

const tabLink = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".tab-content");

function showPanel(index, color, name) {
    tabLink.forEach(function(item) {
        item.style.borderColor = "";
        item.style.opacity = 0.6;
    });

    tabLink[index].style.borderColor = color;
    tabLink[index].style.opacity = 1;
    document.querySelector("#log-file").innerText = name;

    tabContent.forEach(item => {
        item.style.display = "none";
    });

    tabContent[index].style.display = "block";
}

showPanel(0, "#f36", "ABOUT.md");
