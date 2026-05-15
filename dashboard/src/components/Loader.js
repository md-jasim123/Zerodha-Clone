import React from "react";
import "./Loader.css";

export const TableSkeleton = ({ rows = 4, cols = 8 }) => {
  const colsArray = Array.from({ length: cols });
  const rowsArray = Array.from({ length: rows });

  return (
    <div className="skeleton-table">
      <table>
        <thead>
          <tr>
            {colsArray.map((_, i) => (
              <th key={i}>
                <div className="skeleton header" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsArray.map((_, r) => (
            <tr key={r}>
              {colsArray.map((_, c) => (
                <td key={c}>
                  <div className="skeleton" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const BoxSkeleton = ({ lines = 4 }) => (
  <div className="skeleton-box">
    {Array.from({ length: lines }).map((_, i) => (
      <div className="skeleton line" key={i} />
    ))}
  </div>
);

export default TableSkeleton;
