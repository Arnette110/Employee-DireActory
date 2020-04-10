/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Employees from "../../utils/employees";
import SearchForm from "../../components/SearchForm/search";
import EmployeeTable from "../../components/table";
import NavBar from "../../components/navbar";

export default function Search() {
  const [search, setSearch] = useState("");
  const [employee, setEmployee] = useState("");
  const [sortedField, setSortedField] = useState("");
  const [error, setError] = useState("");
  const [sortConfig, setSortConfig] = useState("");
  const findEmployees = Employees.filter((e) => {
    return e.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    // setEmployee(findEmployees)
  };

  const handleSortBtn = (key) => {
    let direction = 'ascending';
    if (
      sortedField &&
      sortedField.key === key &&
      sortedField.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortedField({ key, direction });
  
    // event.preventDefault()
   
    if(sortedField !== null) {
      Employees.sort((a, b) => {
        if (a.firstName < b.firstName) {
          return sortedField.direction === "ascending" ? -1 : 1;
        }
        if (a.firstName > b.firstName) {
          return sortedField.direction === "ascending" ? 1 : -1;
        } 
        return 0;
      });
    }
  };

    
  

  return (
    <div>
      <NavBar />
      <SearchForm handleInputChange={handleInputChange} results={search} />
      <EmployeeTable
        Employees={findEmployees}
        handleSortBtn={handleSortBtn}
      />
    </div>
  );
}
