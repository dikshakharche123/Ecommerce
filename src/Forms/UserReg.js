import React from 'react';

function UserReg(props) {
  return (
    <div className="container mt-5">
      <hr />
      <br />
      <h2>User Registration Table</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.dob}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserReg;
