import React from "react";
function Hero() {
  return (
    <>
      <div className="container-fulid" id="supportHero">
      <div className="container ">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="/">Track Tickets</a>
      </div>
      <div className="row ">
        <div className="col-5 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O, why is my order getting rejected..." />
          <br />
          <a href="/">Track account opening</a>
          <a href="/">Track segment activation</a>
          <a href="/">Intraday margins</a>
          <a href="/">Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className="col-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="/">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="/">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>

      </div>
      </div>
    </>
  );
}

export default Hero;
