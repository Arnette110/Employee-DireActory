import React from 'react';
import EmployeeTable from "./components/table";
import NavBar from "./components/navbar";
import Search from "./pages/Search/index";
import Employees from "./utils/employees";




function App() {
  return (
    <div className="container">
      <NavBar/>
      <Search/>
      <EmployeeTable employees={Employees} />
    </div>
  );
}

export default App;
