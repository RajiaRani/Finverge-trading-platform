import React from "react";
function Hero() {
  return (
    <>
      <div className="container" style={{ width: "900px" }}>
        <div
          className="row p-5  text-center text-muted"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <h2>We pioneered the discount broking model in India.</h2>
          <h2> Now, we are breaking ground with our technology.</h2>
        </div>
        <hr />

        <div className="row">
          <div className="col p-5">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col p-5">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p>
              <a href="/">Rainmatter</a>, our fintech fund and incubator, has
              invested in several fintech startups with the goal of growing the
              Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our <a href="/">blog</a> or see what the
              media is <a href="/">saying about us</a> or learn more about our
              business and product
              <a href="/"> philosophies</a>.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <h3 className="text-center mb-5">People</h3>
          <div className="col">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="owner"
              style={{ borderRadius: "50%", width: "70%" }}
            />
            <p>Nithin Kamath</p>
            <span>Founder, CEO</span>
          </div>
          <div className="col">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a href="/">Homepage </a>/ <a href="/">TradingQnA</a> /{" "}
              <a href="/">Twitter</a>
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="owner"
              style={{ borderRadius: "50%", width: "60%" }}
            />
            <p>
              Nikhil Kamath <br />
              Co-founder & CFO
            </p>
          </div>
          <div className="col">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="owner"
              style={{ borderRadius: "50%", width: "60%" }}
            />
            <p>
              Dr. Kailash Nadh <br /> CTO
            </p>
          </div>
          <div className="col">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="owner"
              style={{ borderRadius: "50%", width: "60%" }}
            />
            <p>
              {" "}
              Venu Madhav <br /> COO
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="owner"
              style={{ borderRadius: "50%", width: "60%" }}
            />
            <p>Hanan Delvi <br/>
            CCO</p>
          </div>
          <div className="col">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="owner"
              style={{ borderRadius: "50%", width: "60%" }}
            />
            <p>Seema Patil <br/>
            Director</p>
          </div>
          <div className="col">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="owner"
              style={{ borderRadius: "50%", width: "60%" }}
            />
            <p>Karthik Rangappa <br/>
            Chief of Education</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="owner"
              style={{ borderRadius: "50%", width: "60%" }}
            />
            <p>Austin Prakesh <br/>
            Director Strategy</p>
          </div>
          <div className="col">
            
          </div>
          <div className="col">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
