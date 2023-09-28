import React from 'react'
import SearchNormal from './icons/SearchNormal'
import NotificationBing from './icons/NotificationBing'
import DataTable from 'react-data-table-component'

function Dashboard1() {
    const columns=[
        {
            name:"Invoice ID",
            selector:row=>row.invoice,
            style:{
                color:"dodgerblue"
            }
        },
        {
            name:"Date",
            selector:row=>row.date
        },
        {
            name:"Customer",
            selector:row=>row.customer
        },
        {
            name:"Payable Amount",
            selector:row=>row.payable
        },
        {
            name:"Paid Amount",
            selector:row=>row.paid
        },
        {
            name:"Due",
            selector:row=>row.due
        }
    ];
    const data=[{
        id:1,
        invoice:'#AHGA68',
        date:'23/09/2022',
        customer:'Jacob Marcus',
        payable:'$100',
        paid:'$000',
        due:'$000'
    },
    {
        id:2,
        invoice:'#AHGA68',
        date:'23/09/2022',
        customer:'Jacob Marcus',
        payable:'$100',
        paid:'$000',
        due:'$000'
    },
    {
        id:3,
        invoice:'#AHGA68',
        date:'23/09/2022',
        customer:'Jacob Marcus',
        payable:'$100',
        paid:'$000',
        due:'$000'
    },
    {
        id:4,
        invoice:'#AHGA68',
        date:'23/09/2022',
        customer:'Jacob Marcus',
        payable:'$100',
        paid:'$000',
        due:'$000'
    },
    {
        id:5,
        invoice:'#AHGA68',
        date:'23/09/2022',
        customer:'Jacob Marcus',
        payable:'$100',
        paid:'$000',
        due:'$000'
    },
    {
        id:6,
        invoice:'#AHGA68',
        date:'23/09/2022',
        customer:'Jacob Marcus',
        payable:'$100',
        paid:'$000',
        due:'$000'
    }
]
  return <>

    <div className='container-fluid'>
         <div className='navbar d-flex my-5 mx-1'>
            <div className='search-icon ps-2'>
                <SearchNormal/>
            </div>
            <div className='search-input'>
                <input className='form-control me-sm-2 ps-5 w-100' type="text" placeholder='Search'/>
            </div>

           <div>
            <div className='notification-icon bg-white w-50'>
                    <NotificationBing/>
                </div>
           </div>
        </div>
        <h5 className='mx-3'>Sales Information</h5>
            <div className='row g-3 my-2 mx-2'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span className='fw-bold py-5'>Customer</span><br/><br/>
                        <input className='form-control me-sm-2' type="text" placeholder='Enter Customer Name'/>
                    </div>
                        
                    <div>
                        <span className='fw-bold py-5'>Invoice Id</span><br/><br/>
                        <input className='form-control me-sm-2' type="text" placeholder='Enter Invoice Id'/>
                    </div>

                    <div>
                        <span className='fw-bold py-5'>Start Date</span><br/><br/>
                        <input className='form-control me-sm-2' type="text" placeholder='Enter Start Date'/>
                    </div>

                    <div>
                        <span className='fw-bold py-5'>End Date</span><br/><br/>
                        <input className='form-control me-sm-2' type="text" placeholder='Enter End Date'/>
                    </div>
                </div>
            </div>
       
                <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    fixedHeader
                >
                </DataTable>
    </div>
    </>
}

export default Dashboard1