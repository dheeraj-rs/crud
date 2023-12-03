import Login from "./login"

function App() {
  return (
    <Login/>
  )
}

export default App



// import React, { memo, useState } from "react";

// // TableRow Component
// function TableRow({ obj, onDelete, onEdit }) {
//   const [editID, setEditId] = useState(false);
//   const [editingTitle, setEditingTitle] = useState(obj.title);
//   const [editingType, setEditingType] = useState(obj.type);

//   const handleSave = () => {
//     onEdit(obj.id, editingTitle, editingType);
//     setEditId(false);
//   };

//   const handleDelete = () => {
//     onDelete(obj.id);
//   };

//   return (
//     <tr key={obj.id}>
//       <td className="border border-gray-300 p-4">{obj.id}</td>
//       <td className="border border-gray-300 p-4">
//         {editID ? (
//           <input
//             type="text"
//             value={editingTitle}
//             onChange={(e) => setEditingTitle(e.target.value)}
//           />
//         ) : (
//           obj.title
//         )}
//       </td>
//       <td className="border border-gray-300 p-4">
//         {editID ? (
//           <input
//             type="text"
//             value={editingType}
//             onChange={(e) => setEditingType(e.target.value)}
//           />
//         ) : (
//           obj.type
//         )}
//       </td>
//       <td className="border border-gray-300 p-4">{obj.userId}</td>
//       <td className="flex gap-2 border border-gray-300 p-4">
//         <button className="logo" onClick={handleDelete}>
//           DELETE
//         </button>
//         {editID ? (
//           <button
//             className="bg-green-600 text-white p-2 px-4 rounded-md"
//             onClick={handleSave}
//           >
//             Save
//           </button>
//         ) : (
//           <button
//             className="bg-blue-600 text-white p-2 px-4 logo rounded-md"
//             onClick={() => setEditId(true)}
//           >
//             Edit
//           </button>
//         )}
//       </td>
//     </tr>
//   );
// }

// const MemoizedTableRow = memo(TableRow);

// // App Component
// function App() {
//   const [apiData, setApiData] = useState([]);

//   const handleDelete = (id) => {
//     setApiData((prevData) => {
//       const indexToDelete = prevData.findIndex((item) => item.id === id);

//       if (indexToDelete !== -1) {
//         const newData = [...prevData];
//         newData.splice(indexToDelete, 1);
//         return newData;
//       }

//       return prevData;
//     });

//     // Example: Add a new item after deleting
//     const newId = apiData.length + 1;
//     const newItem = { id: newId, title: `Item ${newId}`, type: "Type C", userId: 103 };
//     setApiData((prevData) => [...prevData, newItem]);
//   };

//   const handleEdit = (id, newTitle, newType) => {
//     setApiData((prevData) =>
//       prevData.map((item) =>
//         item.id === id ? { ...item, title: newTitle, type: newType } : item
//       )
//     );
//   };

//   return (
//     <div className="flex items-center justify-center border">
//       <div className="border border-gray-400 p-4">
//         <table>
//           <thead>
//             <tr>
//               <th className="border border-gray-300 p-2">ID</th>
//               <th className="border border-gray-300 p-2">Title</th>
//               <th className="border border-gray-300 p-2">Type</th>
//               <th className="border border-gray-300 p-2">User ID</th>
//               <th className="border border-gray-300 p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {apiData.map((obj) => (
//               <MemoizedTableRow
//                 key={obj.id}
//                 obj={obj}
//                 onDelete={handleDelete}
//                 onEdit={(newTitle, newType) => handleEdit(obj.id, newTitle, newType)}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { useEffect, useState } from "react";
// import "./App.css";
// import MemoizedTableRow from "./TableRow";
// import {  getdetail } from "./service/api/ApiCalls";

// function App() {
//   const [apiData, setApiData] = useState([]);


// useEffect(() => {
//   const fetchdata = async()=>{
//     const data = await getdetail()
//     setApiData(data)
//   }

// fetchdata()
// }, [])


//   return (
//     <div className="flex items-center justify-center border ">
//       <div className="border border-gray-400 p-4">
//         <table>
//           <thead className="">
//             <tr>
//               <th className="border border-gray-300 p-2">ID</th>
//               <th className="border border-gray-300 p-2">Title</th>
//               <th className="border border-gray-300 p-2">User ID</th>
//               <th className="border border-gray-300 p-2"> Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {apiData.map((obj) => (
//               <MemoizedTableRow key={obj.id} obj={obj} />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;
