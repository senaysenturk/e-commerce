import React, { useState, useContext, useEffect } from "react";
import Table from "../../../components/shared/table/Table";
import { useAuth } from "../../../contexts/auth/AuthContext";
import EditPopup from "../../../components/app/admin/user/edit-popup/EditPopup";
import "./style.scss";

const AllUsers = () => {
  const { users, getAllUsers, removeUser } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [userObject, setUserObject] = useState([]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteUser = async (user, userId) => {
    removeUser(user, userId);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="all-users">
        <div className="">
          <Table
            searchable={true}
            head={[
              { name: "User Name", sortable: true },
              { name: "Mail Address", sortable: true },
              { name: "Role" },
              { name: "Birthdate", sortable: true },
              { name: "Gender", sortable: true },
              { name: "Options", width: 200 },
            ]}
            // head={Object.keys(context.products[0])}
            body={
              users &&
              users.map((user, key) => [
                user.user,
                user.mail,
                user.role,
                user.birth,
                user.gender,
                [
                  <button
                    className="list-btn "
                    onClick={() => {
                      setUserObject(user);
                      togglePopup();
                    }}
                  >
                    Edit
                  </button>,
                  <button
                    className="list-btn btn-danger"
                    onClick={() => {
                      console.log(user.id);
                      handleDeleteUser(user, user.id);
                    }}
                  >
                    Delete
                  </button>,
                ],
              ])
            }
          />
        </div>
        {isOpen && (
          <EditPopup
            handleClose={togglePopup}
            userObject={userObject}
          />
        )}
      </div>
    </>
  );
};

export default AllUsers;