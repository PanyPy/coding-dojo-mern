import React from  'react';

const UserForm = (props) => {
    const { user, setUser } = props;
    
    const onChange = event => {
      const newUser = {...user};
      newUser[event.target.name] = event.target.value;
      setUser(newUser)
    };
    
  return(
    <div className="container">
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">First name</span>
          <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={ onChange } />
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">Last name</span>
          <input type="text" className="form-control" placeholder="Last Name" name="lastName" onChange={ onChange } />
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">Email</span>
          <input type="text" className="form-control" placeholder="Email" name="email" onChange={ onChange } />
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">Password</span>
          <input type="password" className="form-control" placeholder="Password" name="password" onChange={ onChange } />
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">Confirm Password</span>
          <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" onChange={ onChange } />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
