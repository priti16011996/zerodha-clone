import React from "react";
import {positions} from  "../data/data";
const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((stock,index)=>{
                      const currVal = stock.price*stock.qty;
                      const isProfit = currVal - stock.avg*stock.qty >=0.0;
                      const profitClass = isProfit ? "profit" : "loss";
                      const dayClass = stock.isLoss? "loss" : "profit";
                      return (
                      <tr key={index} className="items"> 
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{currVal.toFixed(2)}</td>
                      <td className={profitClass}>{(currVal - stock.avg*stock.qty).toFixed(2)}</td>
                      <td className={dayClass}>{dayClass}.</td>
                    </tr>
                      )
                    })}
        </table>
      </div>
    </>
  );
};

export default Positions;
