import React, { memo, useState } from "react";

function TableRow({obj}) {
    const [editID, setEditId] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [title, setActualTitle] = useState(obj.title)
    const [editingTitle, setEditingTitle] = useState(obj.title)
  return (  
    !deleted && ( <tr >
        <td className="border border-gray-300 p-4 ">{obj.id}</td>
        <td className="border border-gray-300 p-4">
          {editID? (
            <input
              type="text"
              value={editingTitle}
              onChange={(e) => setEditingTitle(e.target.value)}
            />
          ) : (
            title
          )}
        </td>
        
        <td className="border border-gray-300 p-4">{obj.userId}</td>
        <td className="flex gap-2 border border-gray-300 p-4">
          <button
            className=" logo"
            onClick={() => setDeleted(!deleted)}
          >
            DELETE
          </button>

          {editID ? (
            <button
              className="bg-green-600 text-white p-2 px-4  rounded-md"
              onClick={()=>{
                setActualTitle(editingTitle)
                setEditId(false)
              }}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-600 text-white p-2 px-4 logo  rounded-md"
              onClick={() => setEditId(true)}
            >
              Edit
            </button>
          )}
        </td>
      </tr>)
   
  );
}

const MemoizedTableRow = memo(TableRow)

export default MemoizedTableRow