import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";

import { useAuth } from "../../../../../contexts/auth/AuthContext";

export const EditPopup = ({ userObject, handleClose }) => {
  const { updateUser, updateSignUp } = useAuth();

  const [editUser, setEditUser] = useState({});

  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState(userObject.role);

  const handleUser = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setEditUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(editUser);
  };

  const handleSave = async () => {
    setEditUser({
      ...editUser,
      updatedAt: new Date().toLocaleString(),
    });
    console.log(editUser);
    const response = await updateUser(userObject.id, editUser);
    const result = await updateSignUp(userObject, editUser);
    handleClose();
    // handleSetDisplay();
  };

  return (
    <>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>

          <div className="add-product">
            <h3>EDIT USER</h3>
            <div className="product">
              <label htmlFor="user">User Name</label>
              <input
                type="text"
                placeholder="Enter a profile name."
                id="user"
                name="user"
                defaultValue={userObject.user}
                onChange={handleUser}
              />
              <label htmlFor="mail">Mail Address</label>
              <input
                type="text"
                placeholder="Enter an email"
                id="mail"
                name="mail"
                defaultValue={userObject.mail}
                onChange={handleUser}
              />
              <label htmlFor="role">Role:</label>
              <div className="btn-radio">
                <div className="role">
                  <label className="label-role" htmlFor="user">
                    <input
                      className="btn-gender"
                      type="radio"
                      id="user"
                      name="role"
                      defaultChecked={userObject.role === "user" ? true : false}
                      value="user"
                      onChange={handleUser}
                    />{" "}
                    User
                  </label>
                  <label className="label-gender" htmlFor="admin">
                    <input
                      className="btn-gender"
                      type="radio"
                      id="admin"
                      name="role"
                      defaultChecked={
                        userObject.role === "admin" ? true : false
                      }
                      value="admin"
                      onChange={handleUser}
                    />{" "}
                    Admin
                  </label>
                </div>
              </div>
              <label htmlFor="birth">
                <strong>Date of Birth</strong>
              </label>
              <input
                type="date"
                id="birth-day"
                name="birth"
                placeholder="DD.MM.YYYY"
                onChange={handleUser}
                defaultValue={userObject.birth}
              />
              <label htmlFor="gender">
                <strong>Gender:</strong>
              </label>
              <div className="btn-radio">
                <div className="gender">
                  <label className="label-gender" htmlFor="man">
                    <input
                      className="btn-gender"
                      type="radio"
                      id="man"
                      name="gender"
                      defaultChecked={
                        userObject.gender === "man" ? true : false
                      }
                      value="man"
                      onChange={handleUser}
                    />{" "}
                    Man
                  </label>
                  <label className="label-gender" htmlFor="woman">
                    <input
                      className="btn-gender"
                      type="radio"
                      id="woman"
                      name="gender"
                      defaultChecked={
                        userObject.gender === "woman" ? true : false
                      }
                      value="woman"
                      onChange={handleUser}
                    />{" "}
                    Woman
                  </label>
                  <label className="label-gender" htmlFor="other">
                    <input
                      className="btn-gender"
                      type="radio"
                      id="other"
                      name="gender"
                      defaultChecked={
                        userObject.gender === "other" ? true : false
                      }
                      value="other"
                      onChange={handleUser}
                    />{" "}
                    Other
                  </label>
                </div>{" "}
                <div>
                  <label className="label-prefer" htmlFor="prefer">
                    <input
                      className="btn-gender"
                      type="radio"
                      id="prefer"
                      name="gender"
                      defaultChecked={
                        userObject.gender === "prefer" ? true : false
                      }
                      value="prefer"
                      onChange={handleUser}
                    />{" "}
                    Prefer not to say
                  </label>
                </div>
              </div>
              <div className="add-button">
                <button className="btn btn-primary" onClick={handleSave}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPopup;
