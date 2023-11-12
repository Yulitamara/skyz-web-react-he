import React from "react";
import "../assets/scss/_table.scss";

const Table = () => {
  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th>
              <div className="td-bold">
                <span className="material-symbols-outlined">category</span>
              </div>
            </th>
            <th>Category</th>
            <th>Status</th>
            <th>Time</th>
            <th>Workers</th>
            <th>Connections</th>
            <th>Subject/Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr className="first-level">
            <td>
              <div className="icon-container">
                <span className="material-symbols-outlined bigger-icon td-icon">
                  note_alt
                </span>
                <span className="material-symbols-outlined smaller-icon">
                  task_alt
                </span>
              </div>
            </td>
            <td>note</td>
            <td>
              <div className="tag">
                <span className="material-symbols-outlined">task_alt</span>
                <span>Done</span>
              </div>
            </td>
            <td>06/09/2022 12:15</td>
            <td>
              <span>Yael Segal</span>,<span>Max Reynolds</span>,
              <span>John Morgen</span>,<span>Lina Dee</span>,
              <span>Charlie Kelly</span>,<span>Rob McElhenney</span>
            </td>
            <td>
              <span>Yael Segal</span>,<span>Max Reynolds</span>,
              <span>John Morgen</span>,<span>Lina Dee</span>,
              <span>Charlie Kelly</span>,<span>Rob McElhenney</span>
            </td>
            <td>
              <span>Call Danny</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
