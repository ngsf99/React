import React from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>> //hover over setPeople to check type, copy paste it here and change
}

const AddList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setIpnut] = React.useState({
        name: "",
        age: "",
        url: "",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setIpnut({
            ...input, //whatever the currently input is, overwite the e.target.name to e.target.value
            [e.target.name]:e.target.value//two way binding, 
        })
    }

    const handleClick = ():void => {
        if(
            !input.name || //if empty then do some logic
            !input.age
        ) {
            return
        }

        setPeople([
            ...people, //everyone in the list
            {
            //brand new objects
              name: input.name,
              age: parseInt(input.age), // when return it will be string so need to parse
              note: input.note , 
              url: input.url
            }
        ])

        setIpnut({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }

    return (
        <div className="AddList">
            <input 
            type="text"
            placeholder="Name"
            className="AddList-input"
            value={input.name}
            onChange={handleChange}  //HTMLInputElement
            name="name"
            />
            <input 
            type="number"
            placeholder="Age"
            className="AddList-input"
            value={input.age}
            onChange={handleChange} //HTMLInputElement
            name="age"
            /> 
            <textarea
            placeholder="Note"
            className="AddList-input"
            value={input.note}
            onChange={handleChange}  //HTMLTextAreaElement
            name="note"
            />
            <button onClick={handleClick} className="Addlist-btn">Add</button>
        </div>
    )
}

export { AddList }