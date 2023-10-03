import './App.css'


import { useState } from "react";

export function CreateProductForm() {
  const [name, setName] = useState("");

  const onChangeName = (event:React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form>
      <label>Product form</label>
      <input onChange={onChangeName} placeholder="Name" value={name} />
      Name:{name}
    </form>
  );
}


function App() {

  return (
    <>
    <CreateProductForm />
    </>
  )
}

export default App
