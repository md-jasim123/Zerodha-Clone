import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:3002/zerodha/allOrders")
      .then((res) => {
        setAllOrders(res.data.allOrders || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredOrders = allOrders.filter((order) => {
    const matchesSearch = order.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterType === "BUY") return matchesSearch && order.mode === "BUY";
    if (filterType === "SELL") return matchesSearch && order.mode === "SELL";
    return matchesSearch;
  });

  return (
    <div className="orders">
      <h3 className="title">Orders ({filteredOrders.length})</h3>

      <div className="filters" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search instrument..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
        />
        <select 
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="All">All</option>
          <option value="BUY">BUY</option>
          <option value="SELL">SELL</option>
        </select>
      </div>

      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price.toFixed(2)}</td>
                  <td className={order.mode === "BUY" ? "profit" : "loss"}>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
