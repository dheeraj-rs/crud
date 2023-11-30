import { useEffect, useState } from "react";

function App() {
  const [name,setName]=useState('')
  useEffect(() => {

      console.log("Name : ",name);

    const timeout = setTimeout(() => {
      console.log("Name : ",name);
      
    }, 2000);

    return () => {
      // console.log("clear");

clearTimeout(timeout)
    };
  }, [name]);

  return (
    <div>
      <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}/>
      <button>Add</button>
    </div>
  );
}

export default App;
