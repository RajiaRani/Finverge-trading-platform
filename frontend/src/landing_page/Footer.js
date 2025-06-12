import React from "react";
function Footer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              src="/media/images/logo.svg"
              className="mb-3 text-muted"
              alt="logo"
              style={{ width: "50%" }}
            />
            <p
              className="text-muted"
              style={{ fontSize: "12px", lineHeight: "1.9" }}
            >
              © 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.
            </p>
            <a href="/" className="mx-0 fs-4">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a href="/" className="mx-4 fs-4">
              <i class="fa fa-instagram" aria-hidden="true"></i>{" "}
            </a>
            <a href="/" className="mx-4 fs-4">
              <i class="fa fa-twitter" aria-hidden="true"></i>{" "}
            </a>
            <a href="/" className="mx-0 fs-4">
              <i class="fa fa-linkedin" aria-hidden="true"></i>{" "}
            </a>
            <hr />
          </div>

          <div className="col-2 text-muted" style={{fontSize:"14px"}}>
            <h2 className="ms-4 fs-4">Account</h2>
            <ul style={{listStyle:"none"}}>
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li> NRI demat account</li>
              <li>Commodity </li>
              <li>Dematerialisation </li>
              <li> Fund transfer</li>
              <li>MTF </li>
              <li>Referral program </li>
            </ul>
          </div>
          <div className="col-2 text-muted">
            <h2 className="ms-4 fs-4">Support</h2>
            <ul style={{listStyle:"none"}}>
            <li>Contact us</li>
            <li>Support portal</li>
            <li>How to file a complaint? </li>
            <li>Status of your complaints </li>
            <li>Bulletin </li>
            <li>Circular </li>
            <li>Z-Connect blog </li>
            <li>Downloads </li>
            </ul>
          </div>
          <div className="col-2 text-muted">
            <h2 className="ms-4 fs-4">Company</h2>
            <ul style={{listStyle:"none"}}>
            <li>About</li>
            <li>Philosophy</li>
            <li>Press & media </li>
            <li>Careers </li>
            <li>Zerodha Cares (CSR) </li>
            <li>Zerodha.tech </li>
            <li>Open source </li>
            <li> </li>
            </ul>
          </div>
          <div className="col-2 text-muted">
            <h2 className="ms-4 fs-4">Quick links</h2>
            <ul style={{listStyle:"none"}}>
            <li>Upcoming IPOs</li>
            <li>Brokerage charges</li>
            <li>Market holidays </li>
            <li>Economic calendar </li>
            <li>Calculators </li>
            <li>Markets </li>
            <li>Sectors </li>
            <li> </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
