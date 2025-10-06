import { useMemo, useState } from "react";

function SearchableList({ users }) {
  const [query, setQuery] = useState("");

  // 只有 query 或 users 变化时才重新计算
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));
  }, [users, query]);

  return (
    <>
      <input
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filteredUsers.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </>
  );
}
