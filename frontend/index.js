const baseURL = "http://localhost:3000"
const entriesURL = `${baseURL}/entries`
const topicsURL =  `${baseURL}/topics`
const tagsURL =  `${baseURL}/tags`

const $entryCardContainer = document.querySelector(".entry-card-container")

fetch(entriesURL)
    .then(parseJSON)
    .then(accessEntries)

function parseJSON(response){
    return response.json()
}

function accessEntries(entries){
    entries.forEach(renderEntry)
}

function renderEntry(entry){
    const $entryCard = document.createElement("div")
    $entryCard.classList.add("entry-card")
    $entryCard.id = `${entry.name}`

    const $entryName = document.createElement("h3")
    $entryName.textContent = entry.name
    $entryName.innerHTML = `<a href="${entry.url}">${entry.name}</a>`

    const $entryKindContainer = document.createElement("div")
    renderKindIcon($entryKindContainer, entry)

    $entryCard.append($entryName, $entryKindContainer)
    $entryCardContainer.append($entryCard)
}

function renderKindIcon($entryKindContainer, entry){
    const $kindIcon = document.createElement("p")
    const kind = entry.kind.toLowerCase()
    if (kind === "video") {
        $kindIcon.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-videocam"><path class="secondary" d="M13.59 12l6.7-6.7A1 1 0 0 1 22 6v12a1 1 0 0 1-1.7.7L13.58 12z"/><rect width="14" height="14" x="2" y="5" class="primary" rx="2"/></svg>`
    }
    $entryKindContainer.append($kindIcon)
}