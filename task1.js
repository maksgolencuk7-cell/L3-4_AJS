function getPostsWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const posts = JSON.parse(xhr.responseText);
            posts.sort((a, b) => b.title.length - a.title.length);
            callback(posts);
        } else {
            callback(null);
        }
    };
    xhr.send();
}


function getCommentsWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const comments = JSON.parse(xhr.responseText);
            comments.sort((a, b) => a.name.localeCompare(b.name));
            callback(comments);
        } else {
            callback(null);
        }
    };
    xhr.send();
}
