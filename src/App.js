import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "https://th.bing.com/th?id=ORMS.bc97f2501e728bea41772c453e09396e&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0",
    },
    {
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/6194365/pexels-photo-6194365.jpeg",
    },
    {
      name: "John",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Corey",
      role: "Devops Engineer",
      img: "https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Jake",
      role: "Senior Intern",
      img: "https://images.pexels.com/photos/5384429/pexels-photo-5384429.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);
  const showEmplyees = true;
  return (
    <div className="App">
        {showEmplyees ? (
          <>
            <div className="flex flex-wrap justify-center">
              {employees.map((employee) => {
                return(
                  <Employee
                    key={uuidv4()} 
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <p>You cannot see the employees</p>
        )}
    </div>
  );
}

export default App;
