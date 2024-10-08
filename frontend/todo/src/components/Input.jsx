import React, { useState } from "react";

export default function Input() {
  const [desc, setDesc] = useState("");

  function onChangeDesc(event) {
    const value = event.target.value;
    setDesc(value);
    console.log(desc);
  }

  async function createTodo() {
    try {
      console.log(desc);

      const response = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: desc }),
      });
      console.log(response);
      setDesc("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={() => createTodo()}>
      <input value={desc} onChange={onChangeDesc} />
      <button>
        <p>Create Todo</p>
      </button>
    </form>
  );
}
