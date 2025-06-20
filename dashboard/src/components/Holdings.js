import React from "react";
import { holdings } from "../data/data.js";

function Holdings() {
  return (
    <>
      <div>
        <h3 className="title"> Holdings {holdings.length}</h3>
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

            {holdings.map((stock,index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - (stock.avg * stock.qty) >= 0.0;
              const profitClass = isProfit ? "Profit" : "Loss" ;
              const dayClass = stock.isLoss ? "Loss" : "Profit";

              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profitClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profitClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
              })
            }

          </table>
        </div>
      
      </div>
    </>
  );
}

export default Holdings;
