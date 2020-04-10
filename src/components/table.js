import React from "react";


function EmployeeTable(props) {
  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>
              First Name <button className="btn grey darken-4" onClick={props.handleSortBtn}><i className="material-icons">unfold_more</i></button>
            </th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Department</th>
          </tr>
        </thead>
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
