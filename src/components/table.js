import React from "react";

function EmployeeTable(props) {
  return (
    <div className="card table-container">
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            {/* table columns with buttons to sort by ascending of desceding order */}
            <th>
              <button
                className="button"
                onClick={() => props.handleSortBtn("id")}
              >
                <span className="has-text-weight-bold">User ID</span>
                <span className="icon is-small">
                  <i className="fas fa-arrows-alt-v"></i>
                </span>
              </button>
            </th>
            <th className="control">
              <button
                className="button"
                onClick={() => props.handleSortBtn("firstName")}
              >
                <span className="has-text-weight-bold">First Name</span>
                <span className="icon is-small">
                  <i className="fas fa-arrows-alt-v"></i>
                </span>
              </button>
            </th>
            <th>
              <button
                className="button"
                onClick={() => props.handleSortBtn("lastName")}
              >
                <span className="has-text-weight-bold">Last Name</span>
                <span className="icon is-small">
                  <i className="fas fa-arrows-alt-v"></i>
                </span>
              </button>
            </th>
            <th>
              <button className="button">
                <span className="has-text-weight-bold">E-mail</span>
              </button>
            </th>
            <th>
              <button
                className="button"
                onClick={() => props.handleSortBtn("phone")}
              >
                <span className="has-text-weight-bold">Phone</span>
                <span className="icon is-small">
                  <i className="fas fa-arrows-alt-v"></i>
                </span>
              </button>
            </th>
            <th>
              <button
                className="button"
                onClick={() => props.handleSortBtn("department")}
              >
                <span className="has-text-weight-bold">Department</span>
                <span className="icon is-small">
                  <i className="fas fa-arrows-alt-v"></i>
                </span>
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
