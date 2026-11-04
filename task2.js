function getUsersWithPromise() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            return users.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone
            }));
        });
}


function getTodosWithPromise() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            return todos.filter(todo => todo.completed === false);
        });
}


