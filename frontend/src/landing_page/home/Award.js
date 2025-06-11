import React from 'react';
function Awards() {
    return (
        <>
            <div className='container p-5 mt-5 mb-5'>
                <div className='row'>
                    <div className='col-6 p-5'>
                        <img src="/media/images/largestBroker.svg" alt='awardImage' />
                    </div>
                    <div className='col-6 p-5'>
                        <h1>Largest stock broker in India</h1>
                        <p className='mb-5 mt-3'>2+ million Zerodha client ontribute to over 15% f all retail order volumes in India daily by trading and investing in: </p>
                        <div className='row'>
                            <div className='col-6 p-2'>
                                <ul className=''>
                                    <li>Feature and Options</li>
                                    <li>Cmmodity derivatives</li>
                                    <li>Currency derivatives</li>
                                </ul>
                            </div>
                            <div className='col-6 p-2'>
                                <ul>
                                    <li>Stocks & IPO's</li>
                                    <li>Direct mutual funds</li>
                                    <li>Bond and Gov Securities</li>
                                </ul>

                            </div>
                            <img src='/media/images/pressLogos.png' alt='pressLogosImage' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Awards;