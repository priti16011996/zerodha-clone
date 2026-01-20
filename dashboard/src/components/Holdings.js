import React ,{useState,useEffect} from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
 // import {holdings} from  "../data/data"; // Importing from data file for static data

const Holdings = () => {
  const [holdings,setHoldings] = useState([]);
  useEffect(()=>{
    const fetchHoldings = async()=>{
      axios.get("http://localhost:3002/allHoldingsData").then((res)=>{
        console.log(res.data);
        setHoldings(res.data);
      });
    }
    fetchHoldings();
  },[])
   let labels = holdings.map((stock)=>stock["name"]) ;  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data ={
      labels,
      datasets:[
          {
            label: 'Stock Price',
            data: holdings.map((stock) =>stock.price ),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
      ]
    }
  // export const data = {
  //   labels,
  //   datasets: [
      // {
      //   label: 'Dataset 1',
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
      // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tbody>
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
          {holdings.map((stock,index)=>{
            const currVal = stock.price*stock.qty;
            const isProfit = currVal - stock.avg*stock.qty >=0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss? "loss" : "profit";
            return (
            <tr key={index} className="items"> 
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{currVal.toFixed(2)}</td>
            <td className={profitClass}>{(currVal - stock.avg*stock.qty).toFixed(2)}</td>
            <td className={profitClass}>{stock.net}.</td>
            <td className={dayClass}>{dayClass}.</td>
          </tr>
            )
          })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
