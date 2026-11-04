async function getPostsAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    posts.sort((a, b) => b.title.length - a.title.length);
    return posts;
}



async function getCommentsAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    comments.sort((a, b) => a.name.localeCompare(b.name));
    return comments;
}



async function getUsersAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
    }));
}



async function getTodosAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    return todos.filter(todo => todo.completed === false);
}
