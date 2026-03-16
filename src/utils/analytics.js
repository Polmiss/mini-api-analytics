export function calculatePostsPerUser(users, posts){
    return users.map(user => ({
        name: user.username,
        posts: howManyPosts(posts, user.id)
    }))
}

function howManyPosts(posts, userId) {
    let result = 0;

    for(let i = 0; i < posts.length; i++) {
        if(posts[i].userId === userId) {
            result++;
        }
    }

    return result;
}

export function calculateTodoStats(todos) {
    const completed = howManyTodosCompleted(todos);
    const notCompleted = todos.length - completed;

    return { completed, notCompleted };
}

export function howManyTodosCompleted(todos) {
    let result = 0;

    for(let i = 0; i < todos.length; i++) {
        if(todos[i].completed === true) {
            result++;
        }
    }

    return result;
}

export function getTopCommentedPosts(comments, howMany) {
    let postsCommentsCounter = new Map();

    for(let i = 0; i < comments.length; i++) {
        postsCommentsCounter.set(comments[i].postId, (postsCommentsCounter.get(comments[i].postId) || 0) + 1);
    }

    const topCommentedPosts = [...postsCommentsCounter.entries()].sort((a, b) => b[1] - a[1]).slice(0, howMany).map(([postId, comments]) => ({ postId, comments }));

    return topCommentedPosts;
}

export function averageTodosPerUser(users, todos) {
    const totalTodos = todos.length;
    
    if(users.length > 0) {
        return totalTodos / users.length;
    }

    return 0;
}