import React from "react";
function Footer() {
  return (
    <>
      <div className="footer"
        style={{ backgroundColor: "whitesmoke", borderTop: "0.5px solid grey",}}
      >
        <div className="container p-5 ">
          <div className="row mb-5">
            <div className="col">
              <img
                src="/media/images/logo.svg"
                className="mb-3 text-muted"
                alt="logo"
                style={{ maxHeight: "20px", width: "auto" }}
              />
              <p
                className="text-muted"
                style={{ fontSize: "12.8px", lineHeight: "1.9" }}
              >
                &copy; 2010 - 2025, Zerodha Broking Ltd. <br /> All rights
                reserved.
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

            <div className="col text-muted" style={{ fontSize: "14px" }}>
              <h2 className="ms-4 fs-5">Account</h2>
              <ul style={{ listStyle: "none" }}>
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

            <div className="col  text-muted" style={{ fontSize: "14px" }}>
              <h2 className="ms-4 fs-5">Support</h2>
              <ul style={{ listStyle: "none" }}>
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
            <div className="col text-muted" style={{ fontSize: "14px" }}>
              <h2 className="ms-4 fs-5">Company</h2>
              <ul style={{ listStyle: "none" }}>
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
            <div className="col   text-muted" style={{ fontSize: "14px" }}>
              <h2 className="ms-4 fs-5">Quick links</h2>
              <ul style={{ listStyle: "none" }}>
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

          <div className="row">
            <p
              className="text-muted"
              style={{ fontSize: "10.4px", lineHeight: "1.8" }}
            >
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
          </div>

          <div className="row">
            <p
              className="text-muted"
              style={{ fontSize: "10.4px", lineHeight: "1.8" }}
            >
              {" "}
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
          </div>

          <div className="row">
            <a
              href="/"
              className="text-muted"
              style={{ fontSize: "10.4px", lineHeight: "1.8" }}
            >
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
          </div>

          <div className="row">
            <p
              className="text-muted"
              style={{ fontSize: "10.4px", lineHeight: "1.8" }}
            >
              {" "}
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
          </div>

          <div className="row">
            <p
              className="text-muted"
              style={{ fontSize: "10.4px", lineHeight: "1.8" }}
            >
              {" "}
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
          </div>
          <div className="row">
            <p
              className="text-muted"
              style={{ fontSize: "10.4px", lineHeight: "1.8" }}
            >
              {" "}
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>

          <div className="row"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
