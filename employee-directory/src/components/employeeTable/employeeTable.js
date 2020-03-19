import React from "react";

const EmployeesTable = props => {
  const { employees, onSort } = props;
  return (
    <table className="table table-dark table-hover table-responsive-md ">
      <thead className="head">
        <tr className="trow">
          <th onClick={() => onSort("picture")}>Avatar</th>
          <th onClick={() => onSort("name.last")}>Name</th>
          <th onClick={() => onSort("email")}>Email</th>
          <th onClick={() => onSort("location")}>Location</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee._id}>
            <td>
              <img className="avatar" src={employee.picture} alt="avatar" />
            </td>
            <td>
              {employee.title}
              {employee.name.first}
              {employee.name.last}
            </td>
            <td>{employee.email}</td>
            <td>{employee.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeesTable;
