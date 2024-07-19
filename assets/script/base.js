import { loadPage } from './module/function.js'
// import { fetchPage } from './module/async.js'


//load site
fetchPage("step_1.html", ".article")

let btn = document.querySelectorAll(".nav button")
for (const x of btn) {
    x.addEventListener("click", (e) => {
        fetchPage(e.target.dataset.page, ".article")
})
}

async function fetchPage(page, query) {
    try {
        const response = await fetch("./assets/page/" + page)
        if (response.ok) {
            console.log(response.text())
            const html = await response.text()
            loadPage(html, query)
        } else {
            throw new Error('Erreur lors de la récupération de la page')
        }
    } catch (error) {
        console.error(error)
    }
}