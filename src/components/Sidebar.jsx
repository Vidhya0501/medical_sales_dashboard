import React from 'react'
import Dashboard from './icons/Dashboard'
import ClipboardTick from './icons/ClipboardTick'
import CalendarTick from './icons/CalendarTick'
import BagTick2 from './icons/BagTick2'
import Sms from './icons/Sms'
import EmptyWallet from './icons/EmptyWallet'
import Setting2 from './icons/Setting2'
import Question from './icons/Question'
function Sidebar() {
  return (
    <div className='sidebar bg-white p-2'>
        <div>
            <span className='brand-name fs-4 text-primary fw-bold my-5 mb-5 pb-5' >Guvi Sales</span>
        </div>
        <div className='list-group list-group-flush'>
              <a className='list-group-item list-group-item-action list-group-item-active my-2 mx-2 px-2'>
                <Dashboard/>
                &nbsp;
                <span>Dashboard</span>
              </a>

              <a className='list-group-item list-group-item-action my-2 mx-2 px-2'>
                <ClipboardTick/>
                &nbsp;
                <span>Lab Test</span>
              </a>

              <a className='list-group-item list-group-item-action my-2 mx-2 px-2'>
                <CalendarTick/>
                &nbsp;
                <span>Appoinment</span>
              </a>

              <a className='list-group-item list-group-item-action my-2 mx-2 px-2'>
                <BagTick2/>
                &nbsp;
                <span>Medicine Order</span>
              </a>

              <a className='list-group-item list-group-item-action my-2 mx-2 px-2'>
                <Sms/>
                &nbsp;
                <span>Message</span>
              </a>

              <a className='list-group-item list-group-item-action my-2 mx-2 px-2'>
                <EmptyWallet/>
                &nbsp;
                <span>Payment</span>
              </a>

              <a className='list-group-item list-group-item-action my-2 mx-2 px-2'>
                <Setting2/>
                &nbsp;
                <span>Settings</span>
              </a>
        </div>
        <div className='mt-5'>
          <Question/>
          <span>Help</span>
        </div>
    </div>
  )
}

export default Sidebar