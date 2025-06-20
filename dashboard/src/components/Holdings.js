import React from "react";
function Holdings() {
  return (
    <>
      <div>
        <h3 className="title"> Holdings {allHoldings.length}</h3>
        <div>
          <table>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>

            {allHoldings.map((stock,index) => {
              const costPrice = stock.price * stock.qty;


              })
            }
          </table>
        </div>
      </div>
    </>
  );
}

export default Holdings;
