import React, { useState, useEffect } from "react";
import "./App.css";

/* <>
          {selectedTab === POSTS && <PostList posts={list} />}
          {selectedTab === COMMENTS && <CommentList comments={list} />}
          {selectedTab === ALBUMS && <PhotoList photos={list} />}
          {selectedTab === PHOTOS && <AlbumList albums={list} />}
          {selectedTab === TODOS && <TodoList todos={list} />}
          {selectedTab === USERS && <UserList users={list} />}
        </> */

// урл
// https://jsonplaceholder.typicode.com/

// ендпоінти
// /posts
// /comments
// /albums
// /photos
// /todos
// /users

// потрібно створити логіку, яка задовільнить наступні вимоги
// в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users)
// дефолтно обрана таба - пости
// по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
// лише 1 список видимий одночасно
// потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...

const Tabs = ({ tabs, selectedTab }) => {
  return (
    <div style={{ display: "flex" }}>
      {tabs.map((tab) => (
        <button
          key={tab.title}
          style={{
            flex: 1,
            height: "50px",
            background: selectedTab === tab.title ? "green" : "lightgrey",
          }}
          onClick={tab.clickHandler}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
const PostList = ({ list }) => {
  return (
    <>
      {list.map((post) => (
        <div key={post.id}>
          <h3> {post.title} </h3>
          <p> {post.body} </p>
        </div>
      ))}
    </>
  );
};
const CommentList = ({ list }) => {
  return (
    <>
      {list.map((comment) => (
        <div key={comment.id}>
          <h3> {comment.name}</h3>
          <p> {comment.body} </p>
        </div>
      ))}
    </>
  );
};
const AlbumList = ({ list }) => {
  return (
    <>
      {list.map((album) => (
        <div key={album.id}>
          <h3> {album.title}</h3>
        </div>
      ))}
    </>
  );
};
const PhotoList = ({ list }) => {
  return (
    <>
      {list.map((photo) => (
        <div key={photo.id}>
          <h3> {photo.title}</h3>
          <img src={photo.thumbnailUrl} alt="photo" />
        </div>
      ))}
    </>
  );
};
const TodoList = ({ list }) => {
  return (
    <>
      {list.map((todo) => (
        <div key={todo.id}>
          <h3> {todo.title} </h3>
          <p> {todo.comleted.toString()} </p>
        </div>
      ))}
    </>
  );
};
const UserList = ({ list }) => {
  return (
    <>
      {list.map((user) => (
        <div key={user.id}>
          <h3>
            {user.name} -- {user.username} -- {user.email}
          </h3>
        </div>
      ))}
    </>
  );
};

const urlBuilder = (resource) =>
  `https://jsonplaceholder.typicode.com/${resource}`;

const POSTS = "posts";
const COMMENTS = "comments";
const ALBUMS = "albums";
const PHOTOS = "photos";
const TODOS = "todos";
const USERS = "users";

const Components = {
  [POSTS]: PostList,
  [COMMENTS]: CommentList,
  [ALBUMS]: AlbumList,
  [PHOTOS]: PhotoList,
  [TODOS]: TodoList,
  [USERS]: UserList,
};

function App() {
  const tabs = [
    { title: POSTS, clickHandler: () => setSelectedTab(POSTS) },
    { title: COMMENTS, clickHandler: () => setSelectedTab(COMMENTS) },
    { title: ALBUMS, clickHandler: () => setSelectedTab(ALBUMS) },
    { title: PHOTOS, clickHandler: () => setSelectedTab(PHOTOS) },
    { title: TODOS, clickHandler: () => setSelectedTab(TODOS) },
    { title: USERS, clickHandler: () => setSelectedTab(USERS) },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].title);
  const [data, setData] = useState({

    [POSTS]: [],
    [COMMENTS]: [],
    [ALBUMS]: [],
    [PHOTOS]: [],
    [TODOS]: [],
    [USERS]: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(urlBuilder(selectedTab));
    const json = await response.json();
    setData({...data, [selectedTab]: json})
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [selectedTab]);

  const ComponentToRender = Components[selectedTab];
  return (
    <div className="App">
      <Tabs tabs={tabs} selectedTab={selectedTab} />
      {isLoading && !data[selectedTab].length ? <h1> LOADING... </h1> : (
      <ComponentToRender list={data[selectedTab]} />
      )}
    </div>
  );
}
export default App;