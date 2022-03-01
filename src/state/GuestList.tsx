import { useState } from "react";

const GuestList : React.FC =()=>{
    const [name,setName] = useState<string>("");
    const [guests,setGuests] = useState<string[]>([]);

    const handleGuest = () => {
        setName('');
        setGuests([...guests, name]);
    }

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map((guest)=>{
                 return <li key={guest}>{guest}</li>
            })}
        </ul>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handleGuest}>Add Guest</button>
    </div>
}

export default GuestList;