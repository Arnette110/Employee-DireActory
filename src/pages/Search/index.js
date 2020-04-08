/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Employees from "../../utils/employees";
import SearchForm from "../../components/SearchForm/search";

export default function Search() {
  const [search, setSearch] = useState("");
    const[employee, setEmployee] = useState("");
    const[error, setError] = useState("")
    //  const findEmployees = Employees.filter((e) => {
    //    return e.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    //  });
    // useEffect(() => {
    //     Employees.Employees(search)
    //         .then((res) => {
    //     if (res.data.length === 0) {
    //       throw new Error("No results found.");
    //     }
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
        
    //     setError("");
    //   })
    //   .catch((err) => setError(err.message));
    //     }, [search])
    
  
  const handleInputChange = (event) => {
    setSearch(event.target.value);
    const findEmployees = Employees.filter((e) => {
      return e.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    console.log(...findEmployees);
  };

  const handleFormSubmit = (event) => {
      event.preventDefault();
    setSearch(event.target.value);
    const findEmployees = Employees.filter((e) => {
      return e.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    console.log(...findEmployees);
  };

  return (
    <div>
      <SearchForm
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        results={search}
        // findEmployees={findEmployees}
      />
    </div>
  );
}

