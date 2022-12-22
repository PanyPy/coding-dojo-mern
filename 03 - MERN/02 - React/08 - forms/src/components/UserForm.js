import React, { useState } from  'react';

const UserForm = (props) => {
    const { user, setUser } = props;
    const [userError, setUserError] = useState({
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      passwordLengthError: false,
      passwordMatchError: false
    });

    const onChange = event => {
      // update user values
      const newUser = {...user};
      newUser[event.target.name] = event.target.value;
      setUser(newUser);

      // update validation
      const newUserError = {...userError};
      const hasError = event.target.value.length < 2 && event.target.value !== "";
      newUserError[`${event.target.name}Error`] = hasError;
      setUserError(newUserError);
    };

    const onChangePassword = event => {
      // update user values
      const newUser = {...user};
      newUser[event.target.name] = event.target.value;
      setUser(newUser);

      // update validation
      const notMatchError = user.password === event.target.value ||  user.confirmPassword === event.target.value;        
        let passwordLengthError = user.passwordLengthError;

        if(event.target.name === "password") {
          passwordLengthError = event.target.value.length < 8  && event.target.value !== "";;
        } else {
          passwordLengthError = user.password.length < 8 && user.password !== "";;;
        }
        setUserError({...userError, passwordMatchError: !notMatchError, passwordLengthError: passwordLengthError})
    }
    
  return(
    <div className="container">
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">First name</span>
          <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={ onChange } />
          {userError.firstNameError && <div className="col-sm-12">
            <span className="text-danger"> Must be at least 2 characters long.</span>
          </div>}
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">Last name</span>
          <input type="text" className="form-control" placeholder="Last Name" name="lastName" onChange={ onChange } />
          {userError.lastNameError && <div className="col-sm-12">
            <span className="text-danger"> Must be at least 2 characters long.</span>
          </div>}
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">Email</span>
          <input type="text" className="form-control" placeholder="Email" name="email" onChange={ onChange } />
          {userError.emailError && <div className="col-sm-12">
            <span className="text-danger"> Must be at least 2 characters long.</span>
          </div>}
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">Password</span>
          <input type="password" className="form-control" placeholder="Password" name="password" onChange={ onChangePassword } />
          {userError.passwordLengthError && <div className="col-sm-12">
            <span className="text-danger">Passwords must be at least 8 characters long.</span>
          </div>}
          {userError.passwordMatchError && <div className="col-sm-12">
            <span className="text-danger"> Passwords must match.</span>
          </div>}
        </div>
      </div>
      <div className="row">
        <div className="input-group mb-3">
          <span className="input-group-text">Confirm Password</span>
          <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" onChange={ onChangePassword } />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
