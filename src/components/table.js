import React from "react";
// import MaterialTable from "material-table";
import Employees from "../utils/employees";


function EmployeeTable(props) {
    
  return (
    <div>
      {/* <MaterialTable
        columns={[
          { title: "User ID", field: "id" },
          { title: "First Name", field: "firstName" },
          { title: "Last Name", field: "lastName" },
          { title: "E-mail", field: "email" },
          { title: "Phone", field: "phone" },
          { title: "Department", field: "department" },
        ]}
        data={Employees}
        title="Employee Directory"
      /> */}
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>Department</th>
            </tr>
          </thead>
          {Employees.map((e) => (
            <tbody>
              <tr key={e.id}>
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
    </div>
  );
}

export default EmployeeTable;
