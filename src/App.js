import './App.css';
import Employee from './components/Employee';

function App() {
  //console.log('we are about to list the employees');
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
               <Employee name="Caleb" role="Intern"/>
               <Employee name="Abby" />
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
