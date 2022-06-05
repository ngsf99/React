import React from "react";
import { IState as IProps } from "../App";

const NewList: React.FC<IProps> = ({people}) => {

    const render = () : JSX.Element[] => {
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
            {render()}
        </div>
    )
}

export { NewList }