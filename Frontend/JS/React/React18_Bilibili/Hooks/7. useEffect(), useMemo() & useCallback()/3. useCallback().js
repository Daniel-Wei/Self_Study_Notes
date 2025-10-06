import { useState, useCallback } from "react";

function UserItem({ onSelect, user }) {
  console.log("Render UserItem:", user.name);
  return <li onClick={() => onSelect(user)}>{user.name}</li>;
}

function UserList({ users }) {
  const [selected, setSelected] = useState(null);

  // 如果不用 useCallback，每次渲染 onSelect 都是新函数
  const handleSelect = useCallback((user) => {
    setSelected(user);
  }, []);

  return (
    <>
      <ul>
        {users.map(u => <UserItem key={u.id} user={u} onSelect={handleSelect} />)}
      </ul>
      {selected && <p>Selected: {selected.name}</p>}
    </>
  );
}
