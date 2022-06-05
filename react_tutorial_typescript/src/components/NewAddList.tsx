import React from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    //copy paste from hover over setPeople
    // setPeople: React.Dispatch<React.SetStateAction<{  
    //     name: string;
    //     age: number;
    //     url: string;
    //     note?: string | undefined;
    //     }[]>>
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>  //same as above, use imports
}

const NewAddList : React.FC<IProps> = ({people, setPeople}) => {

    const [newInput, setNewInput] = React.useState({
        name: "",
        age: "",
        note: "",
        url: ""
    })

    const newHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setNewInput({
            ...newInput,
            [e.target.name]:e.target.value
        })
    }

    const newHandleClick = () :void => {
        if(
            !newInput.name ||
            !newInput.age 
        ){
            return
        }
        setPeople([
            ...people,
            {
                name: newInput.name,
                age: parseInt(newInput.age),
                note: newInput.note,
                url: newInput.url
            }
        ])
    }

    return (
        <div className="AddList">
        <input 
        type="text"
        placeholder="Name"
        className="AddList-input"
        value={newInput.name}
        onChange={newHandleChange}
        name="name"
        />
        <input 
        type="number"
        placeholder="Age"
        className="AddList-input"
        value={newInput.age}
        onChange={newHandleChange}
        name="age"
        /> 
        <textarea
        placeholder="Note"
        className="AddList-input"
        value={newInput.note}
        onChange={newHandleChange}
        name="note"
        />
        <button onClick={newHandleClick} className="Addlist-btn">Add</button>
    </div>
    )
}

export { NewAddList }