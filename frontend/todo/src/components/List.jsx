import { useEffect, useState } from "react";
import Card from "./Card";

const List = () => {
    const [todo, setTodo] = useState([]);

    //allows to update the list of todo when there is a change
    useEffect(() => {
        //get list of todo
        const getTodo = async () => {
            try {
                const response = await fetch("http://localhost:3000/");
                const data = await response.json();
                setTodo(data);
            } catch (err) {
                console.log(err);
            }
        };
        getTodo();
    }, []);
    return (
        <div>
            {todo.map((item) => (
                <Card key={item.id} description={item.description} />
            ))}
        </div>
    );
};

export default List;
