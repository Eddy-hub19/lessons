import React, { useState, useEffect } from "react";
import "./App.css";
import AlbumsList from "./Components/Component/AlbumsList";
import CommentsList from "./Components/Component/CommentsList";
import PhototsLists from "./Components/Component/PhotosLists";
import PostList from "./Components/Component/PostLists";
import TodosLists from "./Components/Component/TodosLists";
import UsersLists from "./Components/Component/UsersLists";

// потрібно створити логіку, яка задовільнить наступні вимоги
// в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users)
// дефолтно обрана таба - пости
// по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
// лише 1 список видимий одночасно
// потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...

const url = "https://jsonplaceholder.typicode.com/todos/";

const App = () => {
  return (
    <div>
      <PostList />
      <CommentsList />
      <AlbumsList />
      <PhototsLists />
      <TodosLists />
      <UsersLists />
    </div>
  );
};
export default App;
