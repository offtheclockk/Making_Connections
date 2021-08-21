var nameChange = document.querySelector(".jane")
var toddRemoved = document.querySelector("#todd")
var philRemoved = document.querySelector("#phil")
var reqChanged = document.querySelector(".badge")
var connectionAdd = document.querySelector("#badge1")
var requests = 2
var connections = 412

function changeName() {
    nameChange.innerText = "Joe Shmo"
}

function removeTodd() {
    toddRemoved.remove()
    requests--
    reqChanged.innerText = requests
}

function removePhil() {
    philRemoved.remove()
    requests--
    reqChanged.innerText = requests
}

function addTodd() {
    toddRemoved.remove()
    requests--
    connections++
    reqChanged.innerText = requests
    connectionAdd.innerText = connections
}

function addPhil() {
    philRemoved.remove()
    requests--
    reqChanged.innerText = requests
    connections++
    connectionAdd.innerText = connections
}