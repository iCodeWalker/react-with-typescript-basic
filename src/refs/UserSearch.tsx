import React, { useState, useRef, useEffect } from "react";

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
  //-- When ever we define a ref typescript thinks that we might not assign this ref on any element that is
  //-- returned from a component. So we have to give a optional null value in type annotation of ref,
  //-- and an initial null value.

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>("");

  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    //-- this check is because typescript think we might have not assigned ref to any element.
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const FoundUser = users.find((user) => {
      return user.name === name;
    });
    console.log(FoundUser);
    setUser(FoundUser);
  };
  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
