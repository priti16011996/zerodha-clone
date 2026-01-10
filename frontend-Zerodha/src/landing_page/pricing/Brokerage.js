import React from "react";
import tab from "./tab.css";
function Brokerage() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-5">
        <div className="col-4 mt-5 p-5">
          <img
            src="images/pricingEquity.svg"
            alt="Pricing 0 equity"
            style={{ width: "70%" }}
          />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5 p-5">
          <img
            src="images/intradayTrades.svg"
            alt="Pricing 0 equity"
            style={{ width: "70%" }}
          />
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 mt-5 p-5">
          <img
            src="images/pricingEquity.svg"
            alt="Pricing 0 equity"
            style={{ width: "70%" }}
          />
          <h1>Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      <div className="row">
        {/* All The Tab Section (Equiy Curremcy Commodity) */}
        <ul className="nav nav-tabs mb-4" id="brokerageTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="equity-tab"
              data-bs-toggle="tab"
              data-bs-target="#equity"
              type="button"
              role="tab"
              aria-controls="equity"
              aria-selected="false"
            >
              Equity
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="currency-tab"
              data-bs-toggle="tab"
              data-bs-target="#currency"
              type="button"
              role="tab"
              aria-controls="currency"
              aria-selected="false"
            >
              Currency
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link "
              id="commodity-tab"
              data-bs-toggle="tab"
              data-bs-target="#commodity"
              type="button"
              role="tab"
              aria-controls="commodity"
              aria-selected="true"
            >
              Commodity
            </button>
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="equity"
            role="tabpanel"
            aria-labelledby="equity-tab"
          >
            {/* Tab section for Equity) */}
            <div className="table-responsive">
              <table className="table table-bordered custom-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Equity delivery</th>
                    <th>Equity intraday</th>
                    <th>F&O - Futures</th>
                    <th>F&O - Options</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <strong>Brokerage</strong>
                    </td>
                    <td>Zero Brokerage</td>
                    <td>0.03% or ₹20/executed order whichever is lower</td>
                    <td>0.03% or ₹20/executed order whichever is lower</td>
                    <td>Flat ₹20 per executed order</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>STT/CTT</strong>
                    </td>
                    <td>0.1% on buy & sell</td>
                    <td>0.025% on sell side</td>
                    <td>0.02% on sell side</td>
                    <td>
                      0.125% on exercised value <br />
                      0.1% on sell side (premium)
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Transaction charges</strong>
                    </td>
                    <td>
                      NSE: 0.00297% <br /> BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00297% <br /> BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00173% <br /> BSE: 0
                    </td>
                    <td>
                      NSE: 0.03503% <br /> BSE: 0.0325%
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>GST</strong>
                    </td>
                    <td colSpan="4">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>SEBI charges</strong>
                    </td>
                    <td colSpan="4">₹10 / crore</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Stamp charges</strong>
                    </td>
                    <td>0.015% or ₹1500 / crore</td>
                    <td>0.003% or ₹300 / crore</td>
                    <td>0.002% or ₹200 / crore</td>
                    <td>0.003% or ₹300 / crore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Tab section for Curremcy ) */}
          <div
            className="tab-pane fade"
            id="currency"
            role="tabpanel"
            aria-labelledby="currency-tab"
          >
            <div className="table-responsive">
              <table className="table table-bordered custom-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Currency futures</th>
                    <th>Currency options</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <strong>Brokerage</strong>
                    </td>
                    <td>0.03% or ₹20/executed order whichever is lower</td>
                    <td>₹20/executed order</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>STT/CTT</strong>
                    </td>
                    <td>No STT</td>
                    <td>No STT</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Transaction charges</strong>
                    </td>
                    <td>
                      NSE: 0.00035% <br /> BSE: 0.00045%
                    </td>
                    <td>
                      NSE: 0.0311% <br /> BSE: 0.001%
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>GST</strong>
                    </td>
                    <td colSpan="2">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>SEBI charges</strong>
                    </td>
                    <td colSpan="2">₹10 / crore</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Stamp charges</strong>
                    </td>
                    <td>0.0001% or ₹10 / crore</td>
                    <td>0.0001% or ₹10 / crore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Tab section for Commodity) */}
          <div
            className="tab-pane fade"
            id="commodity"
            role="tabpanel"
            aria-labelledby="commodity-tab"
          >
            <div className="table-responsive">
              <table className="table table-bordered custom-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Commodity futures</th>
                    <th>Commodity options</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <strong>Brokerage</strong>
                    </td>
                    <td>0.03% or ₹20/executed order whichever is lower</td>
                    <td>₹20/executed order</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>STT/CTT</strong>
                    </td>
                    <td>0.01% on sell side (Non-Agri)</td>
                    <td>0.05% on sell side</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Transaction charges</strong>
                    </td>
                    <td>
                      MCX: 0.0021%
                      <br />
                      NSE: 0.0001%
                    </td>
                    <td>
                      MCX: 0.0418%
                      <br />
                      NSE: 0.001%
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>GST</strong>
                    </td>
                    <td colSpan="2">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>SEBI charges</strong>
                    </td>
                    <td>
                      Agri: ₹1 / crore
                      <br />
                      Non-agri: ₹10 / crore
                    </td>
                    <td>₹10 / crore</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Stamp charges</strong>
                    </td>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="fs-5">
            Calculate your costs upfront using our brokerage calculator
          </p>
        </div>
      </div>

      {/* Charges for Account Opening Section*/}
      <div className="row ">
        <div className="row mt-4">
          <div className="col-12">
            <h5 className="mb-3">Charges for account opening</h5>

            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Type of account</th>
                    <th className="text-end">Charges</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Online account</td>
                    <td className="text-end">
                      <span className="badge bg-success">FREE</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Offline account</td>
                    <td className="text-end">
                      <span className="badge bg-success">FREE</span>
                    </td>
                  </tr>

                  <tr>
                    <td>NRI account (offline only)</td>
                    <td className="text-end">₹ 500</td>
                  </tr>

                  <tr>
                    <td>
                      Partnership, LLP, HUF, or Corporate accounts
                      <span className="text-muted"> (offline only)</span>
                    </td>
                    <td className="text-end">₹ 500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/*Demat AMC (Annual Maintenance Charge)*/}
      <div className="row mt-4">
        <div className="col-12">
          <h5 className="mb-3">Demat AMC (Annual Maintenance Charge)</h5>

          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Value of holdings</th>
                  <th className="text-end">AMC</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Up to ₹4 lakh</td>
                  <td className="text-end">
                    <span className="badge bg-success">FREE*</span>
                  </td>
                </tr>

                <tr>
                  <td>₹4 lakh – ₹10 lakh</td>
                  <td className="text-end">
                    ₹100 per year, charged quarterly*
                  </td>
                </tr>

                <tr>
                  <td>Above ₹10 lakh</td>
                  <td className="text-end">₹300 per year, charged quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footnote */}
          <p className="text-muted small mt-2">
            * Lower AMC is applicable only if the account qualifies as a Basic
            Services Demat Account (BSDA). BSDA account holders cannot hold more
            than one demat account.{" "}
            <a href="#" className="text-primary">
              Click here
            </a>{" "}
            to learn more about BSDA.
          </p>
        </div>
      </div>
      {/* charges for optional value added services*/}
      <div className="row mt-4">
        <div className="col-12">
          <h5 className="mb-3">Charges for optional value added services</h5>

          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Service</th>
                  <th>Billing Frequency</th>
                  <th className="text-end">Charges</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Tickertape</td>
                  <td>Monthly / Annual</td>
                  <td className="text-end">
                    Free: 0&nbsp;|&nbsp;Pro: 249 / 2399
                  </td>
                </tr>

                <tr>
                  <td>Smallcase</td>
                  <td>Per transaction</td>
                  <td className="text-end">
                    Buy &amp; Invest More: 100&nbsp;|&nbsp;SIP: 10
                  </td>
                </tr>

                <tr>
                  <td>Kite Connect</td>
                  <td>Monthly</td>
                  <td className="text-end">
                    Connect: 500&nbsp;|&nbsp;Personal: Free
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <h2 className="fs-4 mt-5 mb-3">Charges explained</h2>
        <div className="col-6 mt-4">
          <h3 className="fs-4 mb-3">Securities/Commodities transaction tax</h3>
          <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
          <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
          <h3 className="fs-4 mb-3">Transaction/Turnover Charges</h3>
          <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
          <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
          <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
          <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
          <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
          <h3 className="fs-4 mb-3">Call & trade</h3>
          <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
          <h3 className="fs-4 mb-3">Stamp charges</h3>
          <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
          <h3 className="fs-4 mb-3">NRI brokerage charges</h3>
          <ul>
            <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
          </ul>
          <h3 className="fs-4 mb-3">Account with debit balance</h3>
          <p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
          <h3 className="fs-4 mb-3">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h3>
          <ul>
            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
          </ul>
          <h3 className="fs-4 mb-3">Margin Trading Facility (MTF)</h3>
          <ul>
            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
            <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
            <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
          </ul>
        </div>
        <div className="col-6">
          <h3 className="fs-4 mb-3">GST</h3>
          <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
          <h3 className="fs-4 mb-3">SEBI Charges</h3>
          <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets</p>
          <h3 className="fs-4 mb-3">SDP (Depository participant) charges</h3>
          <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
          <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
          <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
          <h3 className="fs-4 mb-3">Pledging charges</h3>
          <p>₹30 + GST per pledge request per ISIN.</p>
          <h3 className="fs-4 mb-3">AMC (Account maintenance charges)</h3>
          <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="/">Click here</a></p>
          <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="/">Click here</a></p>
          <h3 className="fs-4 mb-3">Corporate action order charges</h3>
          <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

          <h3 className="fs-4 mb-3">Off-market transfer charges</h3>
          <p>₹25 per transaction.</p>

          <h3 className="fs-4 mb-3">Physical CMR request</h3>
          <p>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

          <h3 className="fs-4 mb-3">Pledging charges</h3>
          <p>₹30 + GST per pledge request per ISIN.</p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
