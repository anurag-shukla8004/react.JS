import React from 'react'
import './App.css'

function App() {

  function getFormData(e){
     e.preventDefault()
  }
  return (
    <div className="App">
      <h1>Handle form in react</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="Enter name" /> <br/> <br/>
        <select>
          <option>Select Option</option>
          <option>Marvels</option>
          <option>DC</option>
        </select> <br/> <br/>
        <input type="checkbox"/>  <span>Term And Condition </span>
        <br/> <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App



