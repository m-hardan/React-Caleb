import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from "../components/AddEmplyee";
import EditEmployee from "../components/EditEmployee";
//import Header from "../components/Header";


function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "http://localhost:8080/images/3.jpg",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      img: "http://localhost:8080/images/4.jpeg",
    },
    {
      id: 3,
      name: "John",
      role: "Director of Eng.",
      img: "http://localhost:8080/images/5.jpeg",
    },
    {
      id: 4,
      name: "Melanie",
      role: "Software Engineer",
      img: "http://localhost:8080/images/6.jpeg",
    },
    {
      id: 5,
      name: "Corey",
      role: "Devops Engineer",
      img: "http://localhost:8080/images/7.jpeg",
    },
    {
      id: 6,
      name: "Jake",
      role: "Senior Intern",
      img: "http://localhost:8080/images/8.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole }
      }

      return employee
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee]);
  }

  const showEmplyees = true;
  return (
    <div className="" >
      {showEmplyees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = <EditEmployee
                id={employee.id}
                name={employee.name}
                role={employee.role}
                updateEmployee={updateEmployee}
              />
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;
