import { loadPage } from './module/function.js'
import { fetchPage } from './module/async.js'


//load site
fetchPage("step_1.code", ".article")

let btn = document.querySelectorAll(".nav button")
for (const x of btn) {
    x.addEventListener("click", (e) => {
        fetchPage(e.target.dataset.page, ".article")
})
}
