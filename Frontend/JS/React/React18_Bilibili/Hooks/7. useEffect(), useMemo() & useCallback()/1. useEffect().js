import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 副作用：请求数据
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []); // [] = 仅首次渲染时执行

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
