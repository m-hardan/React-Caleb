import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  //console.log('we are about to list the employees');
  const [role, setRole] = useState('dev');
  //let role = 'dev';
  const showEmplyees = true;
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello there!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='App'>
        {/*console.log('inside the return')*/}
        {showEmplyees ? (
          <>
               <input type='text' onChange={(e) => {
                console.log(e.target.value);
                //role = e.target.value;
                setRole(e.target.value);
               }} />
               <Employee name="Caleb" role="Intern"/>
               <Employee name="Abby" role={role} />
               <Employee name="John" />
          </>
        ) : (
            <p>You cannot see the employees</p>
        )}
      </div>
    </div>
  );
}

export default App;
