import React from 'react';
function Education() {
    return (
        <>
        <div className='container p-5'>
        <div className='row'>
            <div className='col-6'>
             <img src='/media/images/varsity.svg' alt='varsityImage' />
            </div>
            <div className='col-6'>
               <h1 className='mb-5'>Free and open market education</h1>
               <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
               <a href='/'>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
               <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
               <a href='/'>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
            </div>
         </div>
         <div className='row p-5 text-center'>
            <h1 className='mb-4'>Open a Zerodha account</h1>
            <p className='text-mute mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button className='btn btn-primary m-auto' style={{width:"20%"}}>Sign up for free</button>
         </div>
        </div>
        </>);
}

export default Education;