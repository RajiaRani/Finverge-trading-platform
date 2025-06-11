import React from 'react';
function Pricing() {
    return (
        <>
         <div className='container p-5 mt-5'>
            <div className='row p-5'>
                <div className='col-5'>
                  <h1 className='mb-4'>Unbeatable pricing</h1>
                  <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                  <a href='/'>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-7  d-flex'>
                  <img src='/media/images/pricing0.svg' alt='pricing' style={{width:"20%"}} />
                  <p className='text-muted' style={{fontSize:"12px", left:"-20px"}}>Free account opening</p>
               
                  <img src='/media/images/pricingEquity.svg' alt='pricing' style={{width:"20%"}} />
                  <p className='text-muted' style={{fontSize:"12px"}}> Free equity delivery <br/> and direct mutual funds</p>
                
                  <img src='/media/images/pricingMF.svg' alt='pricing' style={{width:"20%"}} />
                  <p className='text-muted' style={{fontSize:"12px"}}>  Intraday and <br/> F&O</p>
                </div>
            </div>

         </div>
        </>
    );
}

export default Pricing;