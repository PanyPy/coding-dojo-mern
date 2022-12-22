import React from  'react';

const UserView = (props) => {
  const { user} = props;
    
  return(
    <>
    <h2>User Form Data</h2>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">FirstName</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Confirm Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{user.firstName}</th>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.confirmPassword}</td>
        </tr>
      </tbody>
    </table>
    </>
  );
};

export default UserView;
