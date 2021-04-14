import React, { useState } from "react";
import "./App.css";

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
    <div>
      {tabs.map((tab) => (
        <button style={{background: selectedTab === tab.title ? "green" : "lightgray",}}onClick={tab.clickHandler}>{tab.ttile}</button>))}
    </div>
  );
};

function App() {
  const tabs = [
    { title: "posts", clickHandler: () => {} },
    { title: "comments", clickHandler: () => {} },
    { title: "albums", clickHandler: () => {} },
    { title: "photos", clickHandler: () => {} },
    { title: "todos", clickHandler: () => {} },
    { title: "users", clickHandler: () => {} },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].title);
  
  return (
    <div className="App">
      <Tabs tabs={tabs} selectedTab={selectedTab} />
    </div>
  );
}
export default App;
