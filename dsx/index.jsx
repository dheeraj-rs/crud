import { useEffect, useState } from "react";
import MemoizedTableRow from "./TableRow";

import "./style.css";
import { getdetail } from "./Api";

function fed() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getdetail();
      setApiData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="react-table-container">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>User ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((obj) => (
              <MemoizedTableRow key={obj.id} obj={obj} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default fed;
