import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BoxSkeleton } from "./Loader";

const Orders = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // no remote data currently - keep a short delay so loader is visible
    const t = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="orders">
      {loading ? (
        <BoxSkeleton lines={3} />
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={'/'} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
