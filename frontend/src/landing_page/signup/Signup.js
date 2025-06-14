import React from 'react';
function Signup() {
    return ( 
        <>
        <div className='container mb-5'>
            <div className='row p-5  mt-5 text-center text-muted'>
            <h3>Open a free demat & trading account online</h3>
            <p>Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>
            </div>
            <div className='row m-auto p-5' style={{width:"100%"}}>
             <div className='col-5'>
             <img src="/media/images/signup.png" alt='signup_Image' />
             </div>
             <div className='col-2 '></div>
             <div className='col-5 text-muted'>
               <h3>Signup now</h3>
               <p>Or track your existing application</p>
               <form className=''>
                <input type='number' placeholder='Enter your moble number' style={{width:"70%", padding:"10px"}}/> <br/>
                <button className='btn btn-primary mt-4 mb-2' style={{padding:"10px 100px", border:"none !important"}}>Get OPT</button>
               </form>
               <p className='mt-4'>By proceeding, you agree to the Zerodha <a href='/'>terms </a>& <a href='/'>privacy policy</a></p>
             </div>
            </div>
        </div>
        </>
     );
}

export default Signup;