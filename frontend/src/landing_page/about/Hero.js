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
      </div>
    </>
  );
}

export default Hero;
