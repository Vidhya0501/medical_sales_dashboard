import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard1 from './components/Dashboard1'
 
function App() {
  return (
    <div className='container-fluid bg-light min-vh-100'>
      <div className='row'>
        <div className='col-2 bg-white min-vh-100'>
          <Sidebar/>
        </div>
        <div className='col'>
        <Dashboard1/>
        </div>
      </div>
      
    </div>
  )
}

export default App