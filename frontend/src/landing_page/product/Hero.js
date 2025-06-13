import React from "react";
function Hero() {
  return (
    <>
      <div className="container p-5 border-bottom " style={{ width: "1000px" }}>
        <div className="row text-center p-5 m-5">
          <h1>Zerodha Products</h1>
          <p>Sleek, modern, and intuitive trading platforms</p>
          <p>
            Check out our{" "}
            <a href="/">
              investment offerings{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
