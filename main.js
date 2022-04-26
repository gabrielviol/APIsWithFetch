const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => console.log(response.json()))
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then(response => console.log(response.json()))
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
       method: "POST",
       body: JSON.stringify(newUser), 
       headers: {
           "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))

}

const newUser = {
    name: "Gabriel Viol",
    avatar:"https://source.unsplash.com/random",
    city:"Valinhos" 
}

const updatedUser = {
    name: "Rebecca",
    avatar:"https://source.unsplash.com/random",
    city:"London" 
}
//addUser(newUser)

//updateUser(updatedUser, 5)

deleteUser(16)

getUsers()

getUser(5)