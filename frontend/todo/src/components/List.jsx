import { useEffect, useState } from "react";
import Card from "./Card";

const List = () => {
    const [todo, setTodo] = useState([]);

    //get list of todo
    const getTodo = async () => {
        try {
            const response = await fetch("http://localhost:3000/");
            const data = await response.json();
            setTodo(data);
            console.log(todo);
        } catch (err) {
            console.log(err);
        }
    };

    //allows to update the list of todo when there is a change
    useEffect(() => {
        getTodo();
    }, []);
    return (
        <>
            {todo.map((item) => {
                return <Card description={item.description} />;
            })}
        </>
    );
};

export default List;
