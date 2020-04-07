import React from 'react';
import EmployeeTable from "./components/table";
import NavBar from "./components/navbar";
// import Search from "./components/search";


const employees = [
  {
    id: 1,
    firstName: "Chris",
    lastName: "Ellis",
    email: "test@test.com",
    phone: "801-201-5919",
    department: "Development",
  },
  {
    id: 2,
    firstName: "Sloan",
    lastName: "Ellis",
    email: "test1@test.com",
    phone: "718-555-1234",
    department: "UX/UI",
  },
  {
    id: 3,
    firstName: "Sammie",
    lastName: "Ellis",
    email: "test3@test.com",
    phone: "385-555-3241",
    department: "Marketing",
  },
  {
    id: 4,
    firstName: "Tigger",
    lastName: "Ellis",
    email: "test4@test.com",
    phone: "435-555-5678",
    department: "Sales",
  },
  {
    id: 5,
    firstName: "Kimberly",
    lastName: "Knight",
    email: "test5@test.com",
    phone: "415-555-6547",
    department: "Sales",
  },
  {
    id: 6,
    firstName: "Laurel",
    lastName: "Shephard",
    email: "test6@test.com",
    phone: "801-555-2888",
    department: "HR",
  },
  {
    id: 7,
    firstName: "Cecily",
    lastName: "Sakrison",
    email: "test7@test.com",
    phone: "801-555-5913",
    department: "Marketing",
  },
  {
    id: 8,
    firstName: "Kellen",
    lastName: "Sakrison",
    email: "test8@test.com",
    phone: "801-555-2013",
    department: "Development",
  },
  {
    id: 9,
    firstName: "Matthew",
    lastName: "Ellis",
    email: "test9@test.com",
    phone: "801-555-6666",
    department: "Marketing",
  },
  {
    id: 10,
    firstName: "Dustin",
    lastName: "Knight",
    email: "test10@test.com",
    phone: "801-555-9513",
    department: "Sales",
  },
  {
    id: 11,
    firstName: "Sam",
    lastName: "Colvin",
    email: "test11@test.com",
    phone: "801-555-6923",
    department: "Maintenance",
  },
  {
    id: 12,
    firstName: "Simon",
    lastName: "Romano",
    email: "test12@test.com",
    phone: "801-555-5553",
    department: "Maintenance",
  },
  {
    id: 13,
    firstName: "Paul",
    lastName: "Allen",
    email: "test13@test.com",
    phone: "801-555-4532",
    department: "Maintenance",
  },
];

function App() {
  return (
    <div>
      <NavBar/>
      {/* <Search/> */}
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default App;
