import { videoData  } from "./data.js"
console.log(videoData)


const fetchBtn = document.getElementById("fetch-btn")
const renderData = document.getElementById("render-data")

fetchBtn.addEventListener("click", () => {
    renderData.innerHTML = `
        <h1>${videoData['title']}</h1>
        <h2>${videoData['duration']}</h2>
        ${videoData.comments.map(c => `<p>${c.user}:</p> <span>${c.content}</span>`).join("")}
    `
})
