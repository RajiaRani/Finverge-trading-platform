import React from 'react';
function Stats() {
    return (
        <>
         <div className='container p-5 mt-5 mb-5'>
          <div className='row'>
           <div className='col-6'>
             <h2>Trust with confidence</h2>

             <h3>Customer-first always</h3>
             <p>
             That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
             </p>

             <h3>No spam or gimmicks</h3>
             <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="/">Our philosophies</a>.</p>

             <h3>The Zerodha universe</h3>
             <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

             <h3>Do better with money</h3>
             <p>With initiatives like <a href="/">Nudge</a> and <a href="/">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
           </div>

           <div className='col-6'>
           <img src="/media/images/ecosystem.png" alt="Hero"  style={{ width: "100%", height:"100%"}}/>
           </div>

          </div>
         </div>
        </>
    );
}

export default Stats;