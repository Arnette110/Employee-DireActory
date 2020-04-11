import React from "react";


function EmployeeTable(props) {
  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            {/* table columns with buttons to sort by ascending of desceding order */}
            <th>
              User ID{" "}
              <button
                className="btn grey darken-4"
                onClick={() => props.handleSortBtn("id")}
              >
                <i className="material-icons">unfold_more</i>
              </button>
            </th>
            <th>
              First Name{" "}
              <button
                className="btn grey darken-4"
                onClick={() => props.handleSortBtn("firstName")}
              >
                <i className="material-icons">unfold_more</i>
              </button>
            </th>
            <th>
              Last Name{" "}
              <button
                className="btn grey darken-4"
                onClick={() => props.handleSortBtn("lastName")}
              >
                <i className="material-icons">unfold_more</i>
              </button>
            </th>
            <th>
              E-mail
            </th>
            <th>
              Phone{" "}
              <button
                className="btn grey darken-4"
                onClick={() => props.handleSortBtn("phone")}
              >
                <i className="material-icons">unfold_more</i>
              </button>
            </th>
            <th>
              Department{" "}
              <button
                className="btn grey darken-4"
                onClick={() => props.handleSortBtn("department")}
              >
                <i className="material-icons">unfold_more</i>
              </button>
            </th>
          </tr>
        </thead>
        {/* loop through Employees and map to table */}
        {props.Employees.map((e) => (
          <tbody key={e.id}>
            <tr>
              <td>{e.id}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>{e.department}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default EmployeeTable;
