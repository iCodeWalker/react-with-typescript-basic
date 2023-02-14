import React, { useState } from "react";

const users = [
  {
    name: "Sarah",
    age: 28,
  },
  {
    name: "Alex",
    age: 28,
  },
  {
    name: "Micheal",
    age: 28,
  },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  // when app first renders it's value is undefined

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    console.log(foundUser);
    setUser(foundUser);
  };
  return (
    <div>
      <h1>User Search</h1>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
      </div>

      <div>
        {user && (
          <div>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
