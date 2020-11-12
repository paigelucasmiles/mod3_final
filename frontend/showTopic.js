const baseURL = "http://localhost:3000"
const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")
const topicURL = `${baseURL}/topics/${id}`

fetch(topicURL)
    .then(parseJSON)
    .then(topic => console.log(topic))

function parseJSON(response){
    return response.json()
}