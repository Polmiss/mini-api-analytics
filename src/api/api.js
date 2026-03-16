export async function getUsers() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
}


export async function getTodos() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    return result.json();
}


export async function getComments() {
    const result = await fetch("https://jsonplaceholder.typicode.com/comments");
    return result.json();
}


export async function getPosts() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    return result.json();
}