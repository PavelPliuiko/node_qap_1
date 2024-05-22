const axios = require('axios')

axios.get('https://api.github.com/users/dev-pavel', {
    headers: {
        "Accept": "*/*, application/json, text/plain",
    }
})
    .then(res => {
        console.log("User info:")
        console.log(`Name: ${res.data.name}`)
        console.log(`Bio: ${res.data.bio}`)
        console.log(`Public Repos: ${res.data.public_repos}`)
    })
    .catch(err => console.log('Fetch Error: ', err))