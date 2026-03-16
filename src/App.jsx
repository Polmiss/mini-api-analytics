import { useState, useEffect } from 'react'
import './styles/App.css'
import { calculatePostsPerUser, calculateTodoStats, getTopCommentedPosts, averageTodosPerUser } from "./utils/analytics";
import { getUsers, getPosts, getTodos, getComments } from './api/api';
import PostsChart from "./components/PostsChart";
import TodoChart from "./components/TodoChart";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos,setTodos] = useState([]);
  const [comments, setComments] = useState([]);

  const[postsPerUser, setPostsPerUser] = useState([]);
  const[todoStats, setTodoStats] = useState({completed: 0, notCompleted: 0});
  const[topCommentedPosts, setTopCommentedPosts] = useState([]);
  const[averageTodos, setAverageTodos] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsers();
      const postsData = await getPosts();
      const todosData = await getTodos();
      const commentsData = await getComments();

      setUsers(usersData);
      setPosts(postsData);
      setTodos(todosData);
      setComments(commentsData);

      setPostsPerUser(calculatePostsPerUser(usersData, postsData));
      setTodoStats(calculateTodoStats(todosData));
      setTopCommentedPosts(getTopCommentedPosts(commentsData, 5));
      setAverageTodos(averageTodosPerUser(usersData, todosData));
    };


    fetchData();
  }, []);




return (
    <div className="App">
      <h1>Mini API Analytics</h1>
      
      <h2>Najbardziej komentowane posty</h2>
      <ul>
        {topCommentedPosts.map(topPost => {
          const post = posts.find(p => p.id === topPost.postId);
          return (
            <li key={topPost.postId}>
              {post.title} - {topPost.comments} komentarzy
            </li>
          );
        })}
      </ul>

      <p>Srednia todos na uzytkownika: {averageTodos}</p>
      <h2>Posty na uzytkownika:</h2>
      <PostsChart data={postsPerUser} />

      <h2>Status wykonia todos</h2>
      <TodoChart data={todoStats} />
    </div>
  )
}

export default App;