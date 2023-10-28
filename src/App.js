import React,{useState} from 'react';
import './App.css';

function App() {
  const[count,setCount]= useState(0)
  return (
    <div className="container my-5">
        <div className="card text-center my-5">
          <div className="card-body">
            <h1>Counter App</h1>
            <div className="my-5">
              <h2 className="my-5">{count}</h2>
              <button className="btn btn-success mx-3" onClick={()=>setCount(count + 1)}>Icrement</button>
              <button className="btn btn-danger mx-3" onClick={()=>setCount(count - 1)}>Decrement</button>
              <button className="btn btn-info mx-3" onClick={()=>setCount(0)}>Reset</button>
              
            </div>
          </div>
        </div>
      </div>
      
    
  );
}

export default App;
