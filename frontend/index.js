const baseURL = "http://localhost:3000"
const entriesURL = `${baseURL}/entries`
const topicsURL =  `${baseURL}/topics`
const tagsURL =  `${baseURL}/tags`

const $entryCardContainer = document.querySelector(".entry-card-container")
const $newEntryForm = document.querySelector(".new-entry-form")
const $kindFilter = document.querySelector(".kind-filter")


Promise.all([
    fetch(entriesURL),
    fetch(tagsURL)
]).then(function (responses) {
    return Promise.all(responses.map(function (response){
        return response.json()
    }))
}).then(data => {
    let entries = data[0]
    let tags = data[1]

    accessEntries(entries)
    renderOptions(entries)
    renderTagOptions(tags)
})

$newEntryForm.addEventListener("submit", handleNewEntrySubmission)

function handleNewEntrySubmission(event){
    event.preventDefault()
    
    let newEntryData = new FormData(event.target)
    const newEntryName = newEntryData.get("name")
    const newEntryURL = newEntryData.get("url")
    const newEntryKind = newEntryData.get("kind")

    newEntryData = {
        name: newEntryName,
        url: newEntryURL,
        kind: newEntryKind
    }

    renderEntry(newEntryData)

    fetch(entriesURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntryData)
    })
    event.target.reset()
}

function parseJSON(response){
    return response.json()
}

function accessEntries(entries){
    entries.forEach(renderEntry)
}

function renderEntry(entry){
    const $entryCard = document.createElement("div")
    $entryCard.classList.add("entry-card")
    $entryCard.id = `entry-card-id-${entry.id}`

    const $entryName = document.createElement("h3")
    $entryName.textContent = entry.name
    $entryName.innerHTML = `<a href="${entry.url}">${entry.name}</a>`

    const $entryKindContainer = document.createElement("div")
    $entryKindContainer.classList.add("entry-kind-container")
    renderKindIcon($entryKindContainer, entry)

    const $entryTagContainer = document.createElement("div")
    accessTags(entry, $entryTagContainer)

    const $addTagButton = document.createElement("button")
    $addTagButton.classList.add("add-tag-button")
    $addTagButton.textContent = "add tag"

    $entryTagContainer.append($addTagButton)
    $entryCard.append($entryName, $entryKindContainer, $entryTagContainer)
    $entryCardContainer.append($entryCard)
}

function renderOptions(){
    kinds = ["video", "article", "book", "documentation", "blog post"]
    kinds.forEach(kind => {
        const $option = document.createElement("option")
        $option.value = kind
        $option.innerText = kind
        $kindFilter.append($option)
    })
}

function renderKindIcon($entryKindContainer, entry){
    const $kindIcon = document.createElement("p")
    const kind = entry.kind.toLowerCase()
    if (kind === "video") {
        $kindIcon.innerHTML = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-videocam"><path class="secondary" d="M13.59 12l6.7-6.7A1 1 0 0 1 22 6v12a1 1 0 0 1-1.7.7L13.58 12z"/><rect width="14" height="14" x="2" y="5" class="primary" rx="2"/></svg>`
        // $kindIcon.classList.add(`${entry.kind}`)
    }
    if (kind === "article" || "blog post"){
        $kindIcon.innerHTML = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-desktop"><path class="primary" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm0 2v10h16V4H4zm4 16a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.59l.7.7A1 1 0 0 1 16 23H8a1 1 0 0 1-.7-1.7l.7-.71V20z"/><path class="secondary" d="M2 14h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"/></svg>`
        // $kindIcon.classList.add(`${entry.kind}`)
    }
    if (kind === "book"){
        $kindIcon.innerHTML = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-book-open"><g><path class="secondary" d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"/><path class="primary" d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"/></g></svg>`
        // $kindIcon.classList.add(`${entry.kind}`)
    }
    if (kind === "documentation"){
        $kindIcon.innerHTML = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-document"><path class="primary" d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z"/><polygon class="secondary" points="14 2 20 8 14 8"/></svg>`
        // $kindIcon.classList.add(`${entry.kind}`)
    }
    $entryKindContainer.append($kindIcon)
}

function accessTags(entry, $entryTagContainer){
    let tagsList = entry.tags
    if (!tagsList){
        return
    } else {
        tagsList.forEach((tag) => renderTags(tag, $entryTagContainer))
    }
}

function renderTags(tag, $entryTagContainer){
    const $tagContainer = document.createElement("div")
    const $tagElement = document.createElement("p")
    $tagElement.textContent = tag.name
    $tagElement.classList.add("tag")

    $tagContainer.append($tagElement)
    $entryTagContainer.append($tagContainer)
}

function renderTagOptions(tags){
    tags.forEach((tag) => {
        console.log(tag)
    })
}