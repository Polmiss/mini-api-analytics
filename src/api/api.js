export async function getUsers() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result;
}


export async function getTodos() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    return result;
}


export async function getComments() {
    const result = await fetch("https://jsonplaceholder.typicode.com/comments");
    return result;
}


export async function getPosts() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    return result;
}