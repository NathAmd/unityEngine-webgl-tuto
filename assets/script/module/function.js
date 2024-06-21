import { fetchPage } from './async.js'
import { build } from './construct.js'

export function loadPage(page, query) {
    let main = document.querySelector(query)

    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }

    build(page,query)

    Prism.highlightAll()
}