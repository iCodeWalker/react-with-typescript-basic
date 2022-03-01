import React, {useState} from "react";

const users = [
    {
        name:"Sarah", age:28
    },
    {
        name:"Alex", age:28
    },
    {
        name:"Micheal", age: 28
    }
];


const UserSearch : React.FC = () => {
    const [name,setName] = useState<string>("");
    const [user, setUser] = useState<{name:string,age:number} | undefined>()

    const onClick = () => {
        const FoundUser = users.find((user) => {
            return user.name === name;
        });
        console.log(FoundUser);
        setUser(FoundUser);
    }
    return <div>
        User Search
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
        </div>
}

export default UserSearch;