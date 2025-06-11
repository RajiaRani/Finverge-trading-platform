import React from 'react';

function Hero() {
    return (
        <>
            <div className='container p-5 mb-5'>
                <div className='row text-center '>
                    <img src="/media/images/homeHero.png" alt="HeroImage" className='mb-5' />
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='btn btn-primary m-auto col-2 p-2'>Sign up for free</button>
                </div>
            </div>
        </>
    );
}

export default Hero;