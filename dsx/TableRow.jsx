import React, { memo, useState } from "react";
import "./style.css";
function TableRow({ obj }) {
  console.log("row");
  const [editID, setEditId] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [title, setActualTitle] = useState(obj.title);
  const [editingTitle, setEditingTitle] = useState(obj.title);
  return (
    !deleted && (
      <tr>
        <td className="">{obj.id}</td>
        <td className="">
          {editID ? (
            <input
              type="text"
              value={editingTitle}
              onChange={(e) => setEditingTitle(e.target.value)}
            />
          ) : (
            title
          )}
        </td>

        <td className="">{obj.userId}</td>
        <td className="">
          <button className=" logo" onClick={() => setDeleted(!deleted)}>
            DELETE
          </button>

          {editID ? (
            <button
              className=""
              onClick={() => {
                setActualTitle(editingTitle);
                setEditId(false);
              }}
            >
              Save
            </button>
          ) : (
            <button className="" onClick={() => setEditId(true)}>
              Edit
            </button>
          )}
        </td>
      </tr>
    )
  );
}

const MemoizedTableRow = memo(TableRow);

export default MemoizedTableRow;
