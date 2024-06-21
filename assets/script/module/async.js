import { loadPage } from './function.js'

export async function fetchPage(page, query) {
    try {
        const response = await fetch("/assets/page/" + page)
        if (response.ok) {
            const html = await response.text()
            loadPage(html, query)
        } else {
            throw new Error('Erreur lors de la récupération de la page')
        }
    } catch (error) {
        console.error(error)
    }
}