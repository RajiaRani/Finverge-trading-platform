import React from "react";
function Hero() {
  return (
    <>
      <div className="container p-5" style={{ width: "1000px" }}>
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
        <hr />

        <div className="row p-5">
          <div className="col">
            <img
              src="/media/images/kite.png"
              alt="kiteImage"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col">
            <h2>Kite</h2>
            <p>
              Our ultra-fast flagship trading platform with streaming market
              data, advanced charts, an elegant UI, and more. Enjoy the Kite
              experience seamlessly on your Android and iOS devices.
            </p>
            <a href="/">
              Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>{" "}
            <a href="/">
              {" "}
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="row p-5">
          <div className="col">
            <h2>Console</h2>
            <p>
              The central dashboard for your Zerodha account. Gain insights into
              your trades and investments with in-depth reports and
              visualisations.
            </p>
            <a href="/">
              {" "}
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col">
            <img
              src="/media/images/console.png"
              alt="consoleImage"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="row p-5">
          <div className="col">
            <img
              src="/media/images/coin.png"
              alt="kiteImage"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col">
            <h2>Coin</h2>
            <p>
              Buy direct mutual funds online, commission-free, delivered
              directly to your Demat account. Enjoy the investment experience on
              your Android and iOS devices.
            </p>
            <a href="/">
              {" "}
              Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="row p-5">
          <div className="col">
            <h2>Kite Connect API</h2>
            <p>
              Build powerful trading platforms and experiences with our super
              simple HTTP/JSON APIs. If you are a startup, build your investment
              app and showcase it to our clientbase.
            </p>
            <a href="/">
              {" "}
              Kite Connect{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col">
            <img
              src="/media/images/console.png"
              alt="consoleImage"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="row p-5">
          <div className="col">
            <img
              src="/media/images/varsity.png"
              alt="kiteImage"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col">
            <h2>Varsity mobile</h2>
            <p>
              An easy to grasp, collection of stock market lessons with in-depth
              coverage and illustrations. Content is broken down into bite-size
              cards to help you learn on the go.
            </p>
            <a href="/">
              {" "}
              Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <p>
            Want to know more about our technology stack? Check out the
            Zerodha.tech blog.
          </p>
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row text-muted" >
          <div className="col-4 ">
            <img src="/media/images/logo.svg" alt="logo"  style={{width:"70%"}} className="p-3"/>
            <p className="text-center">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
          <img src="/media/images/logo.svg" alt="logo"  style={{width:"70%"}} />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
          <img src="/media/images/logo.svg" alt="logo"  style={{width:"70%"}} />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>

        <div className="row text-muted">
          <div className="col-4">
            <img src="/media/images/logo.svg" alt="logo"  style={{width:"70%"}}/>
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
          <img src="/media/images/logo.svg" alt="logo"  style={{width:"70%"}} />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
          <img src="/media/images/logo.svg" alt="logo"  style={{width:"70%"}} />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>

        <div className="row text-muted">
          <div className="col-4">
            <img src="/media/images/logo.svg" alt="logo"  style={{width:"70%"}}/>
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
          <img src="/media/images/logo.svg" alt="logo"  style={{width:"70%"}} />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
          <img src="/media/images/logo.svg" alt="logo"  style={{width:"70%"}} />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>

        <button className="btn btn-primary text-center" >Sign up for free</button>
      </div>
    </>
  );
}

export default Hero;
