//ASYNC....AWAIT
//Async and Await are the new keywords in ES8 that allow you to work with promises in a more comfortable way.

//fetch all posts from jsonplaceholder.typicode.com api
const fetchData = async() => {

// const data =  await fetch('https://jsonplaceholder.typicode.com/posts') 
// const posts = await data.json()
// console.log(posts)

// try {
//     const data =  await fetch('https://jsonplaceholder.typicode.com/posts') 
//     const posts = await data.json()
//     console.log(posts)
// } catch (error) {
//     console.log(`error: ${error}`)
// }

await fetch('https://jsonplaceholder.typicodes.com/posts')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(`error: ${error}`))
}

fetchData()

//
// async function fetchData2(params) {
    
// }