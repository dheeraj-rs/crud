import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputdata, setInputData] = useState([]);
  const [editdata, setEditdata] = useState("");
  const [editid, setEditid] = useState(null);

  const handleAdd = () => {
    const listItem = { id: Date.now(), name: inputValue };
    setInputData([...inputdata, listItem]);
    setInputValue("");
  };

  const handleEdit = (id, data) => {
    setEditid(id);
    setEditdata(data.name);
  };

  const handleSave = () => {
    const updatedList = inputdata.map((item) =>
      item.id === editid ? { ...item, name: editdata } : item
    );
    setInputData(updatedList);
    setEditid(null);
  };

  const handleCancel = () => {
    setEditid(null);
  };

  const handleDelete = (id) => {
    const updatedList = inputdata.filter((item) => item.id !== id);
    setInputData(updatedList);
  };

  return (
    <section>
      <header>
        <h1>API CRUD</h1>
      </header>
      <nav>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </nav>
      <main>
        <div className="">
          {inputdata.map((item) => (
            <div key={item.id}>
              {editid === item.id ? (
                <input
                  type="text"
                  value={editdata}
                  onChange={(e) => setEditdata(e.target.value)}
                />
              ) : (
                <p>{item.name}</p>
              )}
              {editid === item.id ? (
                <>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEdit(item.id, item)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)}>Del</button>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}

export default App;
