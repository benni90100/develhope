// Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
//  -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }.
//  -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
//   -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.
const user = {
    id: 1,
    name: 'John'
}
const post = ['Post 1', 'Post 2', 'Post 3']

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: user.id, name: user.name })
        }, 1000);

    })
}

function fetchUserPosts(userId, userName) {

    return new Promise((resolve, reject) => {
        if (userId === 1 && userName === "John") {
            resolve(posts = post, name = userName)
        } else {
            reject(`dati utente non validi`)
        }
    })
}

// fetchUserData()
//     .then(data => fetchUserPosts(data.id, data.name))
//     .then(userPost => {
//         console.log("l'utente", name)
//         userPost.forEach(element => {
//             console.log(element);
//         });
       
//     })
//     .catch(err => console.log(err))
async function getUserData() {
    const userData = await fetchUserData()
    const userPost = await fetchUserPosts(user.id, user.name)
    console.log(userData);
    userPost.forEach(element => {
        console.log(element);
    });
    
}
getUserData()
