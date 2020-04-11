/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Employees from "../../utils/employees";
import SearchForm from "../../components/SearchForm/search";
import EmployeeTable from "../../components/table";
import NavBar from "../../components/navbar";

export default function Search() {
  const [search, setSearch] = useState("");
  const [sortedField, setSortedField] = useState("");

  useEffect(() => {
    document.title = "C@rr0t Co. - Employee Directory";})
  
  // filter employees when typing in search bar
  const findEmployees = Employees.filter((e) => {
    return (
      e["id"].toString().indexOf(search.toString()) !== -1 ||
      e["firstName"].toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      e["lastName"].toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      e["email"].toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      e["phone"].toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      e["department"].toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  // set value of input box to search state
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  // sort columns button function
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
    
    
   
    if(sortedField !== null) {
      
      // sort Employees by property key that will be passed in on the button click in table.js
      Employees.sort((a, b) => {
        
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key))return 0;
        
       const compA = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key]
       const compB = (typeof b[key] === "string") ? b[key].toLowerCase() : b[key];
       let comparison = 0
       if (compA > compB) {
         comparison = 1
       } else if (compA < compB) {
         comparison = -1
       }
       return(
         direction === 'ascending' ? (comparison * 1) : -1
       )
      
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
