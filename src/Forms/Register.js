import { useState } from "react";
import UserReg from "./UserReg";
import "./Register.css"; 

function Register() {
  const [users, setUsers] = useState([]);

  const handleSubmit = function (event) {
    event.preventDefault();
    var temp = {
      name: event.target.name.value,
      dob: event.target.dob.value,
      gender: event.target.gender.value,
    };
    console.log(temp);
    setUsers([...users, temp]);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter Name:
          </label>
          <input type="text" className="form-control" name="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Enter Dob:
          </label>
          <input type="date" className="form-control" name="dob" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="male"
              id="male"
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="female"
              id="female"
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Others"
              id="others"
            />
            <label className="form-check-label" htmlFor="others">
              Others
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
      <UserReg data={users} />
    </div>
  );
}

export default Register;
