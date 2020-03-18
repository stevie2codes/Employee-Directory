import React from "react";

const EmployeesTable = props => {
  const { employees } = props;
  return (
    <table className="table table-dark table-hover table-responsive-md ">
      <thead className="head">
        <tr className="trow">
          <th scope="col">Avatar</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
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
