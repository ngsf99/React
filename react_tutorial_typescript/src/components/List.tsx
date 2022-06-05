import React from "react";
import { IState as IProps } from "../App";

// interface IProps {
//     people: {
//       name: string;
//       age: number;
//       url: string;
//       note?: string;  // ? = optional
//     }[]
//   }

const List: React.FC<IProps> = ({people}) => {
    // need jsx element to run (wont work without it , double return)
    const renderList = ():JSX.Element[] => {
        return people.map((person) => {
            return (
                <div className="list">
                <div className="list-header">
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age}</p>
                <p className="list-note">{person.note}</p>
            </div>
            )
        })
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}

export { List }